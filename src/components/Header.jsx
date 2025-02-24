import { NavLink } from "react-router"
import { useUserData } from "./UserAccount"
import { useState } from "react"
import MobileMenu from "./MobileMenu"
const Header = () => {
    const { userData } = useUserData()
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    if (!userData.username) {
        return (
            <header>
                <NavLink to='/'><img src="/media/logo.png" alt="Northcoders logo" className="logo" /></NavLink>
                <nav>
                    <NavLink to='topics'>Topics</NavLink>
                    <NavLink to='login'>Login</NavLink>
                </nav>
                <div className="mobile">
                    <button onClick={() => {
                        setShowMobileMenu(!showMobileMenu)
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </button>
                    {showMobileMenu ? <MobileMenu setShowMobileMenu={setShowMobileMenu} user={userData.username} /> : null}
                </div>
            </header>
        )
    }
    return (
        <header>
            <NavLink to='/'><img src="/media/logo.png" alt="Northcoders logo" className="logo" /></NavLink>
            <nav>
                <NavLink to='/topics'>Topics</NavLink>
                <NavLink to='#' className="userProfile">{userData.username}</NavLink>
                <NavLink to='/articles/new-article' className='newArticleNav'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg>
                    <span>New article</span>
                </NavLink>
            </nav>
            <div className="mobile">
                <button onClick={() => {
                    setShowMobileMenu(!showMobileMenu)
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                </button>
                {showMobileMenu ? <MobileMenu setShowMobileMenu={setShowMobileMenu} user={userData.username} /> : null}
            </div>
        </header>
    )
}
export default Header