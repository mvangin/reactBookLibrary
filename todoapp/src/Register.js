import React, { useState } from "react"
import { auth } from "./firebase"
import { withRouter, Link } from "react-router-dom"

function Register({ history }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")

    async function handleRegister(e) {
        e.preventDefault();
        if (password === repeatPassword) {
            try {
                await auth.createUserWithEmailAndPassword(email, password).then(credential => {
                    credential.user.updateProfile({
                        displayName: name
                    })
                })
                history.push("/bookList")
            } catch (error) {
                alert(error)
            }
        } else {
            alert("passwords do not match")
        }
    }


    return (

        <form>
            <p> Name: </p>
            <input value={name} type="name" onChange={(e) => setName(e.target.value)} />

            <p> Email: </p>
            <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} />

            <p> Create Password:  </p>
            <input value={password} onChange={(e) => setPassword(e.target.value)} />

            <p> Repeat Password:  </p>
            <input value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
            <br />
            <br />

            <button type="submit" onClick={handleRegister} > Create New Account </button>
            <div><Link to="/login"> <button> Login to existing account</button> </Link> </div>


        </form>

    )
}

export default withRouter(Register)