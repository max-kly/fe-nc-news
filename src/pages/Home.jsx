import { useState, useEffect } from "react"
import { Link } from "react-router"
import { getArticles } from "../api/articles"
import { getSortedArticles } from "../api/articles"
import { useSearchParams } from "react-router"
import SortDropdown from "../components/SortDropdown"
import Preloader from "../components/Preloader"
const Home = () => {
    const [searchParams] = useSearchParams()
    const sortBy = searchParams.get('sort_by')
    const order = searchParams.get('order')
    const [articles, setArticles] = useState([])
    const [currentSort, setCurrentSort] = useState('Most recent')
    const [showSortDropdown, setShowSortDropdown] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    document.title = '🗞️ NC News'
    useEffect(() => {
        setIsLoading(true)
        getArticles()
            .then((articles) => {
                setArticles(articles)
                setIsLoading(false)
            })
    }, [])
    useEffect(() => {
        if (!sortBy && !order) return
        setIsLoading(true)
        const query = `sort_by=${sortBy}&order=${order}`
        getSortedArticles(query)
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
    if (isLoading) {
        return <Preloader />
    }
    return (
        <>
            <h1>Welcome to NC News!</h1>
            <div className="controls">
                <div className="group">
                    <div className="label">Sort by:</div>
                    <button onClick={() => {
                        showSortDropdown ? setShowSortDropdown(false) : setShowSortDropdown(true)
                    }}>{currentSort}</button>
                    {showSortDropdown ? <SortDropdown /> : null}
                </div>
            </div>
            <section className="articles">
                {articles.map((article) => {
                    return <Link to={`articles/${article.article_id}`} className="article" key={article.article_id}>
                        <div className="topic">{article.topic}</div>
                        <img src={article.article_img_url} alt={article.title} />
                        <p className="title">{article.title}</p>
                    </Link>
                })}
            </section>
        </>
    )
}
export default Home