import api from "./config"
export const validateCredentials = (username, password) => {
    return api.get(`/users/login?username=${username}&password=${password}`)
        .then(({ data }) => {
            return data
        })
        .catch(({ response: { data } }) => {
            return data
        })
}
export const userAuth = (session) => {
    return api.get(`/users/auth?session=${session}`)
        .then(({ data }) => {
            return data
        })
        .catch(({ response: { data } }) => {
            return (data)
        })
}