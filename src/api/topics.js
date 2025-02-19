import api from "./config"
export const getTopics = () => {
    return api.get('/topics')
        .then(({ data: { topics } }) => {
            return topics
        })
}