import api from "./config"
import { getArticleByID } from "./articles"
export const getComments = (article_id, page, limit) => {
    return api.get(`/articles/${article_id}/comments`, { params: { page, limit } })
        .then(({ data: { comments } }) => {
            return comments
        })
}
export const addComment = (article_id, username, commentContent) => {
    return api.post(`/articles/${article_id}/comments`, { username: username, body: commentContent })
        .then(({ data: { comment } }) => {
            return comment
        })
}
export const deleteComment = (comment_id, article_id) => {
    return api.delete(`/comments/${comment_id}`)
        .then(() => {
            return getArticleByID(article_id)
                .then(({ comment_count }) => {
                    return comment_count
                })
        })
}
export const updateCommentVotes = (comment_id, value) => {
    return api.patch(`/comments/${comment_id}`, { inc_votes: value })
        .then(({ data: { comment } }) => {
            return comment
        })
}
export const postNewComment = (article_id, userData, commentContent, setComments, setCommentContent, setCommentCount, setPostingComment) => {
    if (!userData) {
        alert('Only logged in users can leave comments')
        setCommentContent('')
        return
    }
    setPostingComment(true)
    addComment(article_id, userData.username, commentContent)
        .then(() => {
            getComments(article_id)
                .then((comments) => {
                    setComments(comments)
                    setCommentContent('')
                    getArticleByID(article_id)
                        .then(({ comment_count }) => {
                            setCommentCount(comment_count)
                            setPostingComment(false)
                        })
                })
        })
}