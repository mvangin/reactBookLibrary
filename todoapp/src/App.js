import React, { setState, useState, useEffect, useContext } from 'react';
import './App.css';
import BookList from "./BookList"
import Form from "./Form"
import Header from "./Header"
import "./App.css"
import { ActionContext } from "./HelperFuncs"

function App() {

const {addBook} = useContext(ActionContext)

  return (
    <>
      <div id="body">
        <Header />
        <Form addBook={addBook} />
        <BookList />
      </div>
    </>
  );
}






export default App;
