import { createContext, useContext } from "react";
const UserContext = createContext()
const UserAccount = ({ children, userData }) => {
    return (
        <UserContext.Provider value={{ userData }}>
            {children}
        </UserContext.Provider>
    )
}
export default UserAccount
export const useUserData = () => useContext(UserContext)
