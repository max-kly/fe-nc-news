import { useParams } from "react-router"
import { getArticlesByTopic } from "../api/articles"
import { useState, useEffect } from "react"
import { Link } from "react-router"
import Error from "../components/Error"
import Preloader from "../components/Preloader"
const Topic = () => {
    const { topic_name } = useParams()
    const [articles, setArticles] = useState([])
    const [err, setErr] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        getArticlesByTopic(topic_name)
            .then((articles) => {
                setArticles(articles)
                setIsLoading(false)
            })
            .catch(({ response: { data } }) => {
                console.log(data)
                setErr(data)
                setIsLoading(false)
            })
    }, [])
    if (Object.keys(err).length > 0) {
        document.title = `😭 ${err.msg} - NC News 🗞️`
        return <Error err={err} />
    }
    const topicName = topic_name.charAt(0).toUpperCase() + topic_name.slice(1)
    document.title = `🔥 ${topicName} - NC News 🗞️`
    if (isLoading) return <Preloader />
    return (
        <>
            <h1>{topicName} articles</h1>
            <div className="articles">
                {articles.map((article) => {
                    return <Link to={`../articles/${article.article_id}`} className="article" key={article.article_id}>
                        <div className="topic">{article.topic}</div>
                        <img src={article.article_img_url} alt={article.title} />
                        <p className="title">{article.title}</p>
                    </Link>
                })}
            </div>
        </>
    )
}
export default Topic