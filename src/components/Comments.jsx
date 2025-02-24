import { formatDate } from "../utils/utils"
import { useUserData } from "./UserAccount"
import { addComment } from "../api/comments"
import { useState } from "react"
import { getComments } from "../api/comments"
import { deleteComment } from "../api/comments"
import { getArticleByID } from "../api/articles"
import { updateCommentVotes } from "../api/comments"
import CommentPagination from "./CommentPagination"
const Comments = ({ article_id, comments, setComments, commentCount, setCommentCount }) => {
    const { userData } = useUserData()
    const [commentContent, setCommentContent] = useState([])
    const [paginationPage, setPaginationPage] = useState(2)
    const paginationLimit = 10;
    const voteHandler = (e, comment, value) => {
        const count = e.currentTarget.parentElement.querySelector('.comment-vote-count')
        const currentVotes = count.textContent
        count.textContent = Number(currentVotes) + value
        updateCommentVotes(comment.comment_id, value)
    }
    if (!comments.length) {
        return (
            <div className="comments-area" id="comments">
                <h2>Comments</h2>
                <p className="placeholder">Be the first one to comment!</p>
                <form className="commentForm" action="/" onSubmit={(e) => {
                    e.preventDefault()
                    if (!userData.username) {
                        alert('Only logged in users can leave comments')
                        return
                    }
                    addComment(article_id, userData.username, commentContent)
                        .then(() => {
                            getComments(article_id)
                                .then((comments) => {
                                    setComments(comments)
                                    setCommentContent('')
                                    getArticleByID(article_id)
                                        .then(({ comment_count }) => {
                                            setCommentCount(comment_count)
                                        })
                                })
                        })
                }}>
                    <div className="comment-input">
                        <textarea placeholder="Enter your comment" value={commentContent} onChange={(e) => {
                            setCommentContent(e.target.value)
                        }}></textarea>
                        <div className="button-area">
                            <input value='Submit' type="submit" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
    return (
        <div className="comments-area" id="comments">
            <h2>Comments</h2>
            <div className="comments-list" id="commentList">
                {comments.map((comment) => {
                    if (comment.author === userData.username) {
                        return <div className="comment" key={comment.comment_id}>
                            <div className="comment-header">
                                <div className="comment-author"><span>{comment.author}</span> said:</div>
                                <div className="comment-date">{formatDate(comment.created_at)}</div>
                            </div>
                            <div className="comment-body">{comment.body}</div>
                            <div className="comment-votes">
                                <div className="comment-vote-count">{comment.votes}</div>
                                <button className='voteControls' onClick={(e) => {
                                    if (!userData.username) {
                                        alert('Only logged in users can vote comments up')
                                        return
                                    }
                                    voteHandler(e, comment, 1)
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
                                    </svg>
                                </button>
                                <button className='voteControls' onClick={(e) => {
                                    if (!userData.username) {
                                        alert('Only logged in users can vote comments down')
                                        return
                                    }
                                    voteHandler(e, comment, -1)
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
                                    </svg>
                                </button>
                            </div>
                            <button className="delete" onClick={(e) => {
                                e.currentTarget.parentElement.classList.add('deleting')
                                deleteComment(comment.comment_id, article_id)
                                    .then((comment_count) => {
                                        setCommentCount(comment_count)
                                        getComments(article_id)
                                            .then((newComments) => {
                                                setComments(newComments)
                                            })
                                    })
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                                </svg>
                            </button>
                        </div>
                    }
                    return <div className="comment" key={comment.comment_id}>
                        <div className="comment-header">
                            <div className="comment-author"><span>{comment.author}</span> said:</div>
                            <div className="comment-date">{formatDate(comment.created_at)}</div>
                        </div>
                        <div className="comment-body">{comment.body}</div>
                        <div className="comment-votes">
                            <div className="comment-vote-count">{comment.votes}</div>
                            <button className="voteControls" onClick={(e) => {
                                if (!userData.username) {
                                    alert('Only logged in users can vote comments down')
                                    return
                                }
                                voteHandler(e, comment, 1)
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
                                </svg>
                            </button>
                            <button className="voteControls" onClick={(e) => {
                                if (!userData.username) {
                                    alert('Only logged in users can vote comments down')
                                    return
                                }
                                voteHandler(e, comment, -1)
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                })}
            </div>
            {commentCount >= 10 ? <CommentPagination article_id={article_id} paginationPage={paginationPage} setPaginationPage={setPaginationPage} paginationLimit={paginationLimit} comments={comments} setComments={setComments} /> : null}
            <form className="commentForm" action="/" onSubmit={(e) => {
                e.preventDefault()
                if (!userData.username) {
                    alert('Only logged in users can leave comments')
                    return
                }
                addComment(article_id, userData.username, commentContent)
                    .then(() => {
                        getComments(article_id)
                            .then((comments) => {
                                setComments(comments)
                                setCommentContent('')
                                getArticleByID(article_id)
                                    .then(({ comment_count }) => {
                                        setCommentCount(comment_count)
                                    })
                            })
                    })
            }}>
                <div className="comment-input">
                    <textarea placeholder="Enter your comment" value={commentContent} onChange={(e) => {
                        setCommentContent(e.target.value)
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