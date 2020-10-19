import React, { useState, useContext } from "react"
import { withRouter, Redirect, Link } from "react-router-dom"
import { auth } from "./firebase"
import { AuthContext } from "./Auth"
import './Login.css'

function Login({ history }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    async function handleSignIn(e) {
        e.preventDefault();
        await auth.signInWithEmailAndPassword(email, password).catch(error => alert(error.message));
    }

    const currentUser = useContext(AuthContext)

    if (currentUser) {
        return <Redirect to="/bookList" />
    }

    return (
        <>
            <h1> Please Log In Below</h1>
            <form>
                <p> Email: </p>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <p> Password:  </p>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <br />
                <br />
                <div id="buttons">
                    <button id="login" type="submit" onClick={handleSignIn}> Login </button>
                    <div><Link to="/register"> <button> Create New Account</button> </Link></div>
                </div>

            </form>
        </>
    )

}

export default withRouter(Login)