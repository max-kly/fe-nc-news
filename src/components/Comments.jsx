import { useUserData } from "./UserAccount"
import { updateCommentVotes, postNewComment } from "../api/comments"
import { useState } from "react"
import CommentList from "./CommentList"
import CommentPagination from "./CommentPagination"
const Comments = ({ article_id, comments, setComments, commentCount, setCommentCount }) => {
    const { userData } = useUserData()
    const [commentContent, setCommentContent] = useState([])
    const [paginationPage, setPaginationPage] = useState(2)
    const [postingComment, setPostingComment] = useState(false)
    const paginationLimit = 10;
    return (
        <div className="comments-area" id="comments">
            <h2>Comments</h2>
            {!comments.length ? <p className="placeholder">Be the first one to comment!</p> : <CommentList comments={comments} userData={userData} setCommentCount={setCommentCount} setComments={setComments} article_id={article_id} />}
            {commentCount >= 10 ? <CommentPagination article_id={article_id} paginationPage={paginationPage} setPaginationPage={setPaginationPage} paginationLimit={paginationLimit} comments={comments} setComments={setComments} /> : null}
            <form className="commentForm" action="/" onSubmit={(e) => {
                e.preventDefault()
                postNewComment(article_id, userData, commentContent, setComments, setCommentContent, setCommentCount, setPostingComment)
            }}>
                <div className="comment-input">
                    <textarea placeholder="Enter your comment" value={commentContent} onChange={(e) => {
                        setCommentContent(e.target.value)
                    }}></textarea>
                    <div className="button-area">
                        {postingComment ? <input disabled value='Sending ...' type="submit" /> : <input value='Submit' type="submit" />}
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Comments