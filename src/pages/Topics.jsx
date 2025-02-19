import { useEffect, useState } from "react"
import { getTopics } from "../api/topics"
import { Link } from "react-router"
const Topics = () => {
    const [topics, setTopics] = useState([])
    useEffect(() => {
        getTopics()
            .then((topics) => {
                setTopics(topics)
            })
    }, [])
    document.title = `🔥 Topics - NC News 🗞️`
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