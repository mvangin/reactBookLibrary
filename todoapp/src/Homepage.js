import React from "react"
import { Link } from "react-router-dom"

function Homepage() {

    return (
        <>
            <h1>
                Welcome to your pocket library
        </h1>
            <div>
                <div><Link to="/login"> <button> Book Library </button> </Link> </div>
                <div><Link to="/register"> <button> Create New Account </button> </Link></div>
            </div>
        </>
    )
}

export default Homepage