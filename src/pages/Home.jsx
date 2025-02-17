import { useState, useEffect } from "react"
import { Link, NavLink } from "react-router"
import { getArticles } from "../api/getArticles"

const Home = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        getArticles()
            .then((articles) => {
                setArticles(articles)
            })
    }, [])
    return (
        <>
            <div className="articles">
                {articles.map((article) => {
                    return <Link to={`articles/${article.article_id}`} className="article" key={article.article_id}>
                        <div className="topic">{article.topic}</div>
                        <img src={article.article_img_url} alt={article.title} />
                        <p className="title">{article.title}</p>
                    </Link>
                })}
            </div>
        </>
    )
}
export default Home