import { useUserData } from "../components/UserAccount"
import { useNavigate } from "react-router"
import { postTopic } from "../api/topics"
import { useState } from "react"
import Error from "../components/Error"
const NewTopic = () => {
    const { userData } = useUserData()
    const [slug, setSlug] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate()
    document.title = '🔥 New topic - NC News'
    if (!userData.username) {
        const err = { msg: 'Only logged in users are allowed to add new topics' }
        return <Error err={err} />
    }
    return (
        <section className="form-container">
            <form action="/" onSubmit={(e) => {
                e.preventDefault()
                const topic = { slug: slug, description: description }
                postTopic(topic)
                    .then((topic) => {
                        navigate(`/topics`)
                    })
            }}>
                <div className="input-group">
                    <label htmlFor="title">Topic title</label>
                    <input required value={slug} type="text" placeholder="Enter topic title" onChange={(e) => {
                        setSlug(e.target.value)
                    }} />
                </div>
                <div className="input-group">
                    <label htmlFor="title">Topic description</label>
                    <input required value={description} type="text" placeholder="Enter topic description" onChange={(e) => {
                        setDescription(e.target.value)
                    }} />
                </div>
                <input className="postArticle" type="submit" value="Submit article" />
            </form>
        </section>
    )
}
export default NewTopic