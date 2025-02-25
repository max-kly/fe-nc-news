import api from "./config"
export const getTopics = () => {
    return api.get('/topics')
        .then(({ data: { topics } }) => {
            return topics
        })
}
export const postTopic = (topic) => {
    return api.post('/topics', topic)
        .then(({ data: { topic } }) => {
            return topic
        })
}