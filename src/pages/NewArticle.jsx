import { useUserData } from "../components/UserAccount"
import Error from "../components/Error"
import { useEffect, useState } from "react"
import { postArticle } from "../api/articles"
import { getTopics } from "../api/topics"
import { useNavigate } from "react-router"
const NewArticle = () => {
    const { userData } = useUserData()
    const [articleTitle, setArticleTitle] = useState('')
    const [topicList, setTopicList] = useState([])
    const [articleTopic, setArticleTopic] = useState('')
    const [articleContent, setArticleContent] = useState('')
    const [articleImage, setArticleImage] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        getTopics()
            .then((topics) => {
                setTopicList(topics)
                setArticleTopic(topics[0].slug)
            })
    }, [])
    document.title = '🔥 New article - NC News'
    if (!userData.username) {
        const err = { msg: 'Only logged in users are allowed to add new articles' }
        return <Error err={err} />
    }
    return (
        <section className="form-container">
            <form action="/" onSubmit={(e) => {
                e.preventDefault()
                const article = { author: userData.username, title: articleTitle, body: articleContent, topic: articleTopic, article_img_url: articleImage }
                postArticle(article)
                    .then((article) => {
                        navigate(`/articles/${article.article_id}`)
                    })
            }}>
                <div className="input-group">
                    <label htmlFor="title">Article title</label>
                    <input required value={articleTitle} type="text" placeholder="Enter article title" onChange={(e) => {
                        setArticleTitle(e.target.value)
                    }} />
                </div>
                <div className="input-group">
                    <label htmlFor="topic">Article topic</label>
                    <select required onChange={(e) => {
                        setArticleTopic(e.target.value)
                    }}>
                        {topicList.map((topic) => {
                            return <option key={topic.slug} value={topic.slug}>{topic.slug}</option>
                        })}
                    </select>
                </div>
                <div className="input-group">
                    <label htmlFor="content">Article content</label>
                    <textarea required value={articleContent} type="text" placeholder="Enter article content" onChange={(e) => {
                        setArticleContent(e.target.value)
                    }}></textarea>
                </div>
                <div className="input-group">
                    <label htmlFor="title">Article cover</label>
                    <input required value={articleImage} type="text" placeholder="https://domain.com/image.png" onChange={(e) => {
                        setArticleImage(e.target.value)
                    }} />
                </div>
                <input className="postArticle" type="submit" value="Submit article" />
            </form>
        </section>
    )
}
export default NewArticle