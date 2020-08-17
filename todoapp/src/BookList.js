import React from "react"
import Book from "./Book"
import "./BookList.css"

class BookList extends React.Component {


    render() {
        const bookItems = this.props.booksData.map((item, key) => {
            console.log(key)
            return <Book title={item.title} author={item.author} genre={item.genre} pages={item.pages} isRead={item.isRead} key={key} index={key} handleRead={this.props.handleRead} handleDelete={this.props.handleDelete} />   
        })
        return (
            <div id="library">
                {bookItems}
            </div>
        )
    }
}


export default BookList