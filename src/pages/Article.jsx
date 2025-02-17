import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getArticleByID } from "../api/articles"
import Error from "../components/Error"
import { formatDate } from "../utils/utils"
const Article = () => {
    const { article_id } = useParams()
    const [article, setArticle] = useState({})
    const [err, setErr] = useState({})
    useEffect(() => {
        getArticleByID(article_id)
            .then((article) => {
                setArticle(article)
            })
            .catch(({ response: { data } }) => {
                setErr(data)
            })
    }, [])
    if (Object.keys(err).length > 0) {
        document.title = `😭 ${err.msg} - NC News 🗞️`
        return <Error err={err} />
    }

    const createdAt = formatDate(article_id)
    document.title = `🔥 ${article.title} - NC News 🗞️`
    return (
        <main>
            <article>
                <img src={article.article_img_url} alt={article.topic} className="hero" />
                <div className="topic">{article.topic}</div>
                <h1>{article.title}</h1>
                <div className="date">{createdAt}</div>
                <div className="article-controls">
                    <div className="votes">
                        <div className="vote-count">{article.votes}</div>
                        <div className="votes-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                            </svg>
                        </div>
                    </div>
                    <div className="comments-toggle">
                        <div className="comments-count">{article.comment_count}</div>
                        <div className="comments-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-fill" viewBox="0 0 16 16">
                                <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="body">{article.body}</div>
            </article>
            <div className="comments"></div>
        </main>
    )
}
export default Article