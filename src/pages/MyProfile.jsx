import { useUserData } from "../components/UserAccount"
const MyProfile = ({ setUserData }) => {
    const { userData } = useUserData()
    if (!userData.username) {
        return (
            <div className="user">
                <h1>Welcome back!</h1>
                <button
                    onClick={() => {
                        setUserData({ username: 'tickle122', name: "Tom Tickle", avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953" })
                    }}>Log out</button>
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
                    setUserData({})
                }}>Log out</button>
        </div>
    )
}
export default MyProfile