import React from "react"
import "./Book.css"
import checkmark from "./images/checkmark.png"


function Book(props) {
    const text = props.isRead ? <img id="checkmark" src={checkmark} alt="checkmark"/> : "Not Yet" 

    return(
        <div id="book"> 
            <b id="title">{props.title} </b> <br /> Author: {props.author} <br /> Genre: {props.genre} <br/> Pages: {props.pages}<br /> Finished? {text} <br /> Posted By: {props.postedBy} 
            <div id="buttonDiv">
            <button id="readButton" onClick={() => {return props.handleRead(props.index)}}> Read Status </button>   
            <button id="deleteButton" onClick={()=> {return props.handleDelete(props.index) }}> delete </button>
            </div>
        </div>
    )
}

export default Book