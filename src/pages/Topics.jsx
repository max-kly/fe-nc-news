import { useEffect, useState } from "react"
import { getTopics } from "../api/topics"
import { Link } from "react-router"
import Preloader from "../components/Preloader"
const Topics = () => {
    const [topics, setTopics] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        getTopics()
            .then((topics) => {
                setTopics(topics)
                setIsLoading(false)
            })
    }, [])
    document.title = `🔥 Topics - NC News 🗞️`
    if (isLoading) return <Preloader />
    return (
        <>
            <h1>Just pick a topic</h1>
            <section className="topics">
                {topics.map((topic) => {
                    return <Link to={topic.slug} className="topic" key={topic.slug}>
                        <div className="topic-name">{topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}</div>
                        <div className="topic-desc">{topic.description}</div>
                    </Link>
                })}
            </section>
        </>
    )
}
export default Topics