import React from 'react';
import './App.css';
import BookList from "./BookList"
import Form from "./Form"
import DataManager from "./DataManager"
import Header from "./Header"
import "./App.css"

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      booksData: DataManager.books
    }
    this.handleRead = this.handleRead.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.addBook = this.addBook.bind(this)
  }

  addBook(newBook) {
      this.setState((prevState) => (
      {booksData : [...prevState.booksData, newBook]}
      ))
  }
  
  //handle delete here thats passed down to Todo. use map and key and delete and key index
  handleRead(index) {
    const updatedBooks = this.state.booksData
    updatedBooks[index].isRead = this.state.booksData[index].isRead ? false : true;

    this.setState({ booksData: updatedBooks })
  }

  handleDelete(index) {

    const newBooks = this.state.booksData.filter((item, Itemindex) => (index !== Itemindex))
  

    this.setState({ booksData: newBooks })
    console.log(this.state.booksData)
  }

  render() {
    return (
      <>
      <Header />
      <div id="body">
        <BookList handleRead={this.handleRead} handleDelete={this.handleDelete} booksData={this.state.booksData}/>
        <Form addBook={this.addBook}/>
      </div>
      </>
    );
  }
}

export default App;
