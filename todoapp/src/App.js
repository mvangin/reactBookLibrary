import React, { setState, useState, useEffect } from 'react';
import './App.css';
import BookList from "./BookList"
import Form from "./Form"
import Header from "./Header"
import "./App.css"
import db from "./firebase"
import firebase from "firebase"

function App() {

  const [booksData, setBooksData] = useState([]);

  //useEffect(() => {
  // if (localStorage.getItem("bookslist")) {
  //  let booksList = JSON.parse(localStorage.getItem('bookslist'))
  // setBooksData(booksList);
  //}
  //}, [])

  useEffect(() => {
    //this code here fires when app loads
    db.collection('bookLibrary').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      const data = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
      console.log(data)
      setBooksData(data)
    })
    //setBooksData(snapshot.docs.map(doc => doc.data().todo))
  }, [])

  function addBook(newBook) {
    let newData = [...booksData, newBook]
    db.collection('bookLibrary').add(
      {
        ...newBook, timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })

    //updateLocalStorage(newData)
    //setBooksData((prevState) => ([...prevState, newBook]))
  }

  //handle delete here thats passed down to Todo. use map and key and delete and key index
  function handleRead(index) {
    const updatedBooks = booksData.map((item, Itemindex) => {
      if (Itemindex === index) {
        //item.isRead = !item.isRead
        db.collection('bookLibrary').doc(item.id).update({isRead: !item.isRead})
        return item
      } else {
        return item

      }
    })

    //setBooksData(updatedBooks)
    //updateLocalStorage(updatedBooks)
  }

  function handleDelete(index) {
    const newBooks = booksData.filter((item, Itemindex) => {
      if (index !== Itemindex) {
        return item
      } else {
        db.collection('bookLibrary').doc(item.id).delete() 
      } 
    })
    //updateLocalStorage(newBooks)
    //setBooksData(newBooks)
  }

  function updateLocalStorage(newData) {
    localStorage.setItem('bookslist', JSON.stringify(newData))
  }


  return (
    <>
      <div id="body">
        <Header />
        <Form addBook={addBook} />
        <BookList handleRead={handleRead} handleDelete={handleDelete} booksData={booksData} />
      </div>
    </>
  );
}






export default App;
