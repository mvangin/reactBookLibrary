import { auth } from "./firebase"
import React, { useEffect, useState, useContext, createContext } from "react"
import { db } from "./firebase"
import { ActionContext } from "./HelperFuncs"
import firebase from "firebase"

const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const {renderDatabase} = useContext(ActionContext)

    const [currentUser, setCurrentUser] = useState(null);
    
    useEffect(() => {
        auth.onAuthStateChanged(function (user) {
            setCurrentUser(user)
            if (user) {
                db.collection(user.uid).onSnapshot(snapshot => {
                    const data = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id}))
                    renderDatabase(data)
                  })    
            }
        })
    }, [])

    return (
        <AuthContext.Provider value={currentUser} >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContextProvider, AuthContext }