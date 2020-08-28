import React, {useState, useEffect, createContext} from "react"
import {db} from "./firebase"
import firebase from "firebase"
import { auth } from "./firebase"

const ActionContext = createContext();

function HelperFuncs({children}) {

  const [booksData, setBooksData] = useState([]);



  useEffect(() => {
    //this code here fires when app loads

    db.collection('bookLibrary').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      const data = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id}))
      console.log(data)
      setBooksData(data)
    })


  }, [])

  function addBook(newBook) {
    let newData = [...booksData, newBook]
    db.collection('bookLibrary').add(
      {
        ...newBook, timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })

  }

  function handleRead(index) {
    const updatedBooks = booksData.forEach((item, Itemindex) => {
      if (Itemindex === index) {
        db.collection('bookLibrary').doc(item.id).update({isRead: !item.isRead})
        return item
      }
    })
  }

  function handleDelete(index) {
    const newBooks = booksData.filter((item, Itemindex) => {
      if (index !== Itemindex) {
        return item
      } else {
        db.collection('bookLibrary').doc(item.id).delete() 
      } 
    })

  }

  return (
      <ActionContext.Provider value={{addBook, handleRead, handleDelete, booksData}}> {children} </ActionContext.Provider>
  )
}

export {HelperFuncs, ActionContext}