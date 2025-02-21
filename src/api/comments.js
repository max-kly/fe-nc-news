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