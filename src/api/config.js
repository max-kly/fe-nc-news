import axios from "axios";
const api = axios.create({
    baseURL: 'https://nc-news-yuce.onrender.com/api',
    timeout: 5000
});
export default api