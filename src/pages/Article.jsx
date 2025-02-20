import Preloader from "../components/Preloader"
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getArticleByID } from "../api/articles"
import { getComments } from "../api/comments"
import { increaseVoteCount } from "../api/articles"
import { decreaseVotesCount } from "../api/articles"
import Error from "../components/Error"
import { formatDate } from "../utils/utils"
import Comments from "../components/Comments"
const Article = () => {
    const { article_id } = useParams()
    const [article, setArticle] = useState({})
    const [err, setErr] = useState({})
    const [showComments, setShowComments] = useState(false)
    const [comments, setComments] = useState([])
    const [votesCount, setVotesCount] = useState(null)
    const [commentCount, setCommentCount] = useState(null)
    const [upVoted, setUpVoted] = useState(false)
    const [downVoted, setDownVoted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        getArticleByID(article_id)
            .then((article) => {
                setArticle(article)
                setVotesCount(article.votes)
                setCommentCount(article.comment_count)
                setIsLoading(false)
            })
            .catch(({ response: { data } }) => {
                setErr(data)
                setIsLoading(false)
            })
    }, [])
    useEffect(() => {
        if (showComments) {
            getComments(article_id)
                .then((comments) => {
                    setComments(comments)
                })
        }
    }, [showComments])
    useEffect(() => {
        if (!upVoted) return
        increaseVoteCount(article_id)
            .then((article) => {
                setVotesCount(article.votes)
            })
    }, [upVoted])
    useEffect(() => {
        if (!downVoted) return
        decreaseVotesCount(article_id)
            .then((article) => {
                setVotesCount(article.votes)
            })
    }, [downVoted])
    if (Object.keys(err).length > 0) {
        document.title = `😭 ${err.msg} - NC News 🗞️`
        return <Error err={err} />
    }
    document.title = `🔥 ${article.title} - NC News 🗞️`
    if (isLoading) {
        return <Preloader />
    }
    return (
        <main>
            <article>
                <img src={article.article_img_url} alt={article.topic} className="hero" />
                <div className="topic">{article.topic}</div>
                <h1>{article.title}</h1>
                <div className="date">{formatDate(article.created_at)}</div>
                <div className="article-controls">
                    <div className="votes">
                        <div className="vote-count">{votesCount}</div>
                        <button className="votes-button" onClick={(e) => {
                            if (upVoted) alert('You already voted up this article')
                            setUpVoted(true)
                            setDownVoted(false)
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
                            </svg>
                        </button>
                        <button className="votes-button" onClick={(e) => {
                            if (downVoted) alert('You already voted down this article')
                            setDownVoted(true)
                            setUpVoted(false)
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
                            </svg>
                        </button>
                    </div>
                    <div className="comments-toggle" onClick={() => {
                        setShowComments(true)
                    }}>
                        <div className="comments-count">{commentCount}</div>
                        <button className="comments-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-fill" viewBox="0 0 16 16">
                                <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="body">{article.body}</div>
            </article>
            <div className="comments"></div>
            {showComments ? <Comments article_id={article_id} setShowComments={setShowComments} comments={comments} setComments={setComments} setCommentCount={setCommentCount} /> : null}
        </main>
    )
}
export default Article