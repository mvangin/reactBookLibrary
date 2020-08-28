import React from 'react';
import './App.css';
import BookList from "./BookList"
import Header from "./Header"
import "./App.css"
import { Switch, Route } from "react-router-dom"
import Homepage from "./Homepage"
import Register from "./Register"
import Login from "./Login"


function App() {


  return (
    <>
      <div id="body">
        <Header />

        <Switch>
          <Route exact path="/" > <Homepage/> </Route>
          <Route exact path="/login" > <Login/> </Route>
          <Route exact path="/register" > <Register/> </Route>
          <Route exact path="/bookList" > <BookList /> </Route>
        </Switch>
      </div>
    </>
  );
}






export default App;
