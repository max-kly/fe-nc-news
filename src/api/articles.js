import api from "./config"
export const getArticles = (sort_by, order, topic, page, limit) => {
    return api.get('/articles', { params: { sort_by, order, topic, page, limit } })
        .then(({ data: { articles } }) => {
            return articles
        })
}
export const getArticleByID = (article_id) => {
    return api.get(`/articles/${article_id}`)
        .then(({ data: { article } }) => {
            return article
        })
}
export const increaseVoteCount = (article_id) => {
    return api.patch(`/articles/${article_id}`, { inc_votes: 1 })
        .then(({ data: { article } }) => {
            return article
        })
}
export const decreaseVotesCount = (article_id) => {
    return api.patch(`/articles/${article_id}`, { inc_votes: -1 })
        .then(({ data: { article } }) => {
            return article
        })
}
export const postArticle = (article) => {
    return api.post(`/articles/`, article)
        .then(({ data: { article } }) => {
            return article
        })
}