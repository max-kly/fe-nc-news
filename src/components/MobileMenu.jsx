import { Link } from "react-router"
import { useUserData } from "./UserAccount"
const MobileMenu = ({ setShowMobileMenu }) => {
    const { userData } = useUserData()
    const closeMobileMenu = (setShowMobileMenu) => {
        setShowMobileMenu((prevVal) => {
            !prevVal
        })
    }
    return (
        <div className="dropdown">
            <Link to='topics' className="option" onClick={() => closeMobileMenu()}>Topics</Link>
            {userData ?
                <>
                    <Link to='my-profile' className="option" onClick={() => closeMobileMenu()}>My profile</Link>
                    <Link to='articles/new-article' className="option" onClick={() => closeMobileMenu()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path></svg>
                        <span>New article</span>
                    </Link>
                </>
                : <Link to='login' className="option" onClick={() => closeMobileMenu()}>Login</Link>}
        </div>
    )
}
export default MobileMenu