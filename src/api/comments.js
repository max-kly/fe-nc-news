import api from "./config"
export const getComments = (article_id) => {
    return api.get(`/articles/${article_id}/comments`)
        .then(({ data: { comments } }) => {
            return comments
        })
}
export const addComment = (article_id, username, commentContent) => {
    return api.post(`/articles/${article_id}/comments`, {username: username, body: commentContent})
        .then(({ data: { comment } }) => {
            return comment
        })
}