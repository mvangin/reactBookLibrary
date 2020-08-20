import React, { useContext } from "react"
import Book from "./Book"
import "./BookList.css"
import { ActionContext } from "./HelperFuncs"

function BookList() {

    const { booksData, handleRead, handleDelete } = useContext(ActionContext)

    const bookItems = booksData.map((item, key) => {
        console.log(key)
        return <Book title={item.title} author={item.author} genre={item.genre} pages={item.pages} isRead={item.isRead} key={key} index={key} handleRead={handleRead} handleDelete={handleDelete} />
    })

    return (
        <div id="library">
            {bookItems}
        </div>
    )

}


export default BookList