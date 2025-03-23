import { useState } from "react"
import { validateCredentials } from "../api/login"
import { useNavigate } from "react-router"
import { useUserData } from "../components/UserAccount"
const Login = () => {
    const [username, setUsername] = useState('tickle122')
    const [password, setPassword] = useState('tickle122123!')
    const [errMsg, setErrMsg] = useState('')
    const { userData, setUserData } = useUserData()
    const navigate = useNavigate()
    if (userData) {
        navigate('/')
    }
    return (
        <>
            <h1>Welcome back!</h1>
            <section className="form-container">
                <form action="/" onSubmit={(e) => {
                    e.preventDefault()
                    setErrMsg('')
                    validateCredentials(username, password)
                        .then((data) => {
                            if (data.msg) setErrMsg(data.msg)
                            else {
                                setUserData(data.userData)
                                localStorage.setItem('session', data.token)
                                navigate('/')
                            }
                        })
                }}>
                    <div className="input-group">
                        <label htmlFor="title">Username</label>
                        <input required value={username} type="text" placeholder="Enter your username" onChange={(e) => {
                            setUsername(e.target.value)
                        }} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="title">Password</label>
                        <input required value={password} type="password" placeholder="Enter your password" onChange={(e) => {
                            setPassword(e.target.value)
                        }} />
                    </div>
                    {errMsg !== '' ? <p className="error">{errMsg}</p> : null}
                    <input className="postArticle" type="submit" value="Sign in" />
                </form>
            </section>
        </>
    )
}
export default Login