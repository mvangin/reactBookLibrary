import React, { useContext } from "react"
import Book from "./Book"
import "./BookList.css"
import { ActionContext } from "./HelperFuncs"
import { Redirect, withRouter} from "react-router-dom"
import { AuthContext } from "./Auth"
import {auth} from "./firebase"
import Form from "./Form"

function BookList({history}) {

    const { booksData, handleRead, handleDelete } = useContext(ActionContext)

    const { addBook } = useContext(ActionContext)

    const currentUser = useContext(AuthContext)

    const bookItems = booksData.map((item, key) => {
        console.log(key)
        return <Book title={item.title} author={item.author} genre={item.genre} pages={item.pages} isRead={item.isRead} postedBy={item.postedBy} key={key} index={key} handleRead={handleRead} handleDelete={handleDelete} />
    })

    async function handleLogout() {
        await auth.signOut();
        history.push("/login");
    }

    return (
        currentUser ? (
            <>
                <Form addBook={addBook} />

                <button id="signOutButton" onClick={handleLogout}> Sign out </button>

                <div id="library">
                    {bookItems}
                </div>
            </>
        ) : (
                <Redirect to="/login"></Redirect>
            )
    )

}


export default withRouter(BookList)