import api from "./config"
export const getArticles = () => {
    return api.get('/articles')
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
export const getArticlesByTopic = (topic) => {
    return api.get(`/articles?topic=${topic}`)
        .then(({ data: { articles } }) => {
            return articles
        })
}
export const getSortedArticles = (query) => {
    return api.get(`/articles?${query}`)
        .then(({ data: { articles } }) => {
            return articles
        })
}