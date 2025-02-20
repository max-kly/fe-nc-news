import { useParams } from "react-router"
import { getArticles } from "../api/articles"
import { useState, useEffect } from "react"
import { Link, useSearchParams } from "react-router"
import Error from "../components/Error"
import Preloader from "../components/Preloader"
import SortDropdown from "../components/SortDropdown"
const Topic = () => {
    const { topic } = useParams()
    const [searchParams] = useSearchParams()
    const sort_by = searchParams.get('sort_by')
    const order = searchParams.get('order')
    const [currentSort, setCurrentSort] = useState('Most recent')
    const [showSortDropdown, setShowSortDropdown] = useState(false)
    const [articles, setArticles] = useState([])
    const [err, setErr] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        getArticles(undefined, undefined, topic)
            .then((articles) => {
                setArticles(articles)
                setIsLoading(false)
            })
            .catch(({ response: { data } }) => {
                setErr(data)
                setIsLoading(false)
            })
    }, [])
    useEffect(() => {
        if (!sort_by && !order) return
        setIsLoading(true)
        const query = `sort_by=${sort_by}&order=${order}`
        getArticles(sort_by, order, topic)
            .then((articles) => {
                setArticles(articles)
                setShowSortDropdown(false)
                switch (query) {
                    case "sort_by=created_at&order=desc":
                        setCurrentSort('Most recent')
                        break;
                    case "sort_by=created_at&order=asc":
                        setCurrentSort('Oldest first')
                        break;
                    case "sort_by=comment_count&order=desc":
                        setCurrentSort('Most commented')
                        break;
                    case "sort_by=comment_count&order=asc":
                        setCurrentSort('Less commented')
                        break;
                    case "sort_by=votes&order=desc":
                        setCurrentSort('Most voted')
                        break;
                    case "sort_by=votes&order=asc":
                        setCurrentSort('Less voted')
                        break;
                    default:
                        setCurrentSort('Most recent')
                }
                setIsLoading(false)
                return
            })
    }, [searchParams])
    if (Object.keys(err).length > 0) {
        document.title = `😭 ${err.msg} - NC News 🗞️`
        return <Error err={err} />
    }
    const topicName = topic.charAt(0).toUpperCase() + topic.slice(1)
    document.title = `🔥 ${topicName} - NC News 🗞️`
    if (isLoading) return <Preloader />
    return (
        <>
            <h1>{topicName} articles</h1>
            <div className="controls">
                <div className="group">
                    <div className="label">Sort by:</div>
                    <button onClick={() => {
                        showSortDropdown ? setShowSortDropdown(false) : setShowSortDropdown(true)
                    }}>{currentSort}</button>
                    {showSortDropdown ? <SortDropdown /> : null}
                </div>
            </div>
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