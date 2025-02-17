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