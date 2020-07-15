import React from 'react';
import './App.css';
import BookList from "./BookList"
import Form from "./Form"
import Header from "./Header"
import "./App.css"

class App extends React.Component {




  constructor() {
    super()
    if (localStorage.getItem("bookslist")) {
      let booksList = JSON.parse(localStorage.getItem('bookslist'))
      this.state = {
        booksData: booksList
      }
    } else {
      this.state = { booksData: [] }
    }

    this.handleRead = this.handleRead.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.addBook = this.addBook.bind(this)
  }

  addBook(newBook) {
    let newData = [...this.state.booksData, newBook]
    this.updateLocalStorage(newData)

    this.setState((prevState) => (
      { booksData: [...prevState.booksData, newBook] }
    ))
  }

  //handle delete here thats passed down to Todo. use map and key and delete and key index
  handleRead(index) {
    const updatedBooks = this.state.booksData
    updatedBooks[index].isRead = this.state.booksData[index].isRead ? false : true;

    this.updateLocalStorage(updatedBooks)

    this.setState({ booksData: updatedBooks })
  }

  handleDelete(index) {

    const newBooks = this.state.booksData.filter((item, Itemindex) => (index !== Itemindex))

    this.updateLocalStorage(newBooks)

    this.setState({ booksData: newBooks })
    console.log(this.state.booksData)
  }

  updateLocalStorage(newData){
    localStorage.setItem('bookslist', JSON.stringify(newData))
  }

  render() {

    return (
      <>
        <div id="body">
          <Header />
          <Form addBook={this.addBook} />
          <BookList handleRead={this.handleRead} handleDelete={this.handleDelete} booksData={this.state.booksData} />
        </div>
      </>
    );
  }
}





export default App;
