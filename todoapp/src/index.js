import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HelperFuncs } from "./HelperFuncs"
import { BrowserRouter as Router } from "react-router-dom"
import { AuthContextProvider } from "./Auth"


ReactDOM.render(
  <Router>
    <HelperFuncs>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </HelperFuncs>
  </Router>,
  document.getElementById('root')

)



