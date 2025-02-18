import { formatDate } from "../utils/utils"
import { useUserData } from "./UserAccount"
import { addComment } from "../api/comments"
import { useState } from "react"
import { getComments } from "../api/comments"
const Comments = ({ article_id, setShowComments, comments, setComments, setCommentCount}) => {
    const { userData } = useUserData()
    const [commentContent, setCommentContent] = useState()
    return (
        <div className="comments-area">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="closeBtn" viewBox="0 0 16 16" onClick={() => {
                setShowComments(false)
            }}>
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
            <h2>Comments</h2>
            <div className="comments-list">
                {comments.map((comment) => {
                    return <div className="comment" key={comment.comment_id}>
                        <div className="comment-header">
                            <div className="comment-author"><span>{comment.author}</span> said:</div>
                            <div className="comment-date">{formatDate(comment.created_at)}</div>
                        </div>
                        <div className="comment-body">{comment.body}</div>
                        <div className="comment-votes">
                            <div className="comment-vote-count">{comment.votes}</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
                            </svg>
                        </div>
                    </div>
                })}
            </div>
            <form action="/" onSubmit={(e) => {
                e.preventDefault()
                if (!userData.username) alert('Only logged in users can leave comments')
                addComment(article_id, userData.username, commentContent)
                    .then(() => {
                        getComments(article_id)
                            .then((comments) => {
                                setComments(comments)
                                setCommentContent('')
                                setCommentCount(comments.length)
                            })
                    })
            }}>
                <div className="comment-input">
                    <textarea placeholder="Enter your comment" value={commentContent} onChange={(e) => {
                        if (e.target.value !== '') {
                            setCommentContent(e.target.value)
                        }
                    }}></textarea>
                    <div className="button-area">
                        <input value='Submit' type="submit" />
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Comments