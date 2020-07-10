import React from "react"
import Book from "./Book"

class BookList extends React.Component {


    render() {
        const bookItems = this.props.booksData.map((item, key) => {
            console.log(key)
            return <Book title={item.title} isRead={item.isRead} key={key} index={key} handleRead={this.props.handleRead} handleDelete={this.props.handleDelete} />
            
        })
        return (
            <div>
                {bookItems}
            </div>
        )

    }

}


export default BookList