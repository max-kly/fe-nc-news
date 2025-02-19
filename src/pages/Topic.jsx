import { useParams } from "react-router"
import { getArticlesByTopic } from "../api/articles"
import { useState, useEffect } from "react"
import { Link } from "react-router"
const Topic = () => {
    const { topic_name } = useParams()
    const [articles, setArticles] = useState([])
    useEffect(() => {
        getArticlesByTopic(topic_name)
            .then((articles) => {
                setArticles(articles)
            })
    }, [])
    return (
        <>
            <h1>{topic_name.charAt(0).toUpperCase() + topic_name.slice(1)} articles</h1>
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