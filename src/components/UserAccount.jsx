import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import { userAuth } from "../api/login";
const UserContext = createContext()
const UserAccount = ({ children }) => {
    const [userData, setUserData] = useState(null)
    const session = localStorage.getItem('session')
    useEffect(() => {
        userAuth(session)
            .then((data) => {
                if (!data.msg) {
                    setUserData(data.data)
                }
            })
    }, [])
    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    )
}
export default UserAccount
export const useUserData = () => useContext(UserContext)