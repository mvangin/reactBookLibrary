import React, {useState, createContext} from "react"
import {db} from "./firebase"
import firebase from "firebase"
import { auth } from "./firebase"

const ActionContext = createContext();

function HelperFuncs({children}) {

  const [booksData, setBooksData] = useState([]);

  // useEffect(() => {
  //   //this code here fires when app loads

  //   // db.collection('bookLibrary').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
  //   //   const data = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id}))
  //   //   console.log(data)
  //   //   initializeDatabase(data)
  //   // })


  // }, [])

  function renderDatabase(data) {
    setBooksData(data)
  }

  function addBook(newBook) {
    db.collection(auth.currentUser.uid).add(
      {
        ...newBook, timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })

  }

  function handleRead(index) {
    booksData.forEach((item, Itemindex) => {
      if (Itemindex === index) {
        db.collection(auth.currentUser.uid).doc(item.id).update({isRead: !item.isRead})
      }
    })
  }

  function handleDelete(index) {
    booksData.forEach((item, Itemindex) => {
      if (index === Itemindex) {
        db.collection(auth.currentUser.uid).doc(item.id).delete()
      }
    })
  }

  return (
      <ActionContext.Provider value={{addBook, handleRead, handleDelete, booksData, renderDatabase}}> {children} </ActionContext.Provider>
  )
}

export {HelperFuncs, ActionContext}