import { auth } from "./firebase"
import React, { useEffect, useState, createContext } from "react"
import {db} from "./firebase"

const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    let x = 0;
    useEffect(() => {
        auth.onAuthStateChanged(function (user) {
            setCurrentUser(user)
           
            if (user) {
                x += 1;
                let userName =  user.displayName
                db.collection(user.uid).add({userName:"hello" + x})

                db.collection(user.uid).onSnapshot(snapshot => {
                    const data = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
                    console.log(data)
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