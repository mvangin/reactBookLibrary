import { auth } from "./firebase"
import React, { useEffect, useState, createContext } from "react"

const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(setCurrentUser)
    }, [])

    return (
        <AuthContext.Provider value={currentUser} >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContextProvider, AuthContext}