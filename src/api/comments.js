import api from "./config"
export const getComments = (article_id) => {
    return api.get(`/articles/${article_id}/comments`)
        .then(({ data: { comments } }) => {
            return comments
        })
}