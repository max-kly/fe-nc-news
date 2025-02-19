import { NavLink } from "react-router"
const Header = () => {
    return (
        <header>
            <NavLink to='/'><img src="/assets/media/logo.png" alt="Northcoders logo" className="logo" /></NavLink>
            <nav>
                <NavLink to='/topics'>Topics</NavLink>
                <NavLink to='/authors'>Authors</NavLink>
            </nav>
        </header>
    )
}
export default Header