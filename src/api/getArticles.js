import api from "./config"
export const getArticles = () => {
    return api.get('/articles')
        .then(({ data: { articles } }) => {
            return articles
        })
}