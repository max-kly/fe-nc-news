import { useUserData } from "../components/UserAccount"
import { Link } from "react-router"
const MyProfile = () => {
    const { userData, setUserData } = useUserData()
    if (!userData) {
        return (
            <div className="user">
                <h1>Welcome back!</h1>
                <Link to='/login'><button>Login</button></Link>
            </div>
        )
    }
    return (
        <div className="user">
            <img src={userData.avatar_url} alt={userData.name} />
            <div className="name">{userData.name}</div>
            <div className="username">{userData.username}</div>
            <button
                onClick={() => {
                    setUserData(null)
                    localStorage.removeItem('session')
                }}>Log out</button>
        </div>
    )
}
export default MyProfile