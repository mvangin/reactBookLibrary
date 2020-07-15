import React from "react"
import "./Book.css"


function Book(props) {
    const text = props.isRead ? "read" : "not read"

    return(
        <div id="book"> 
            <b>{props.title}</b> <br /> Author: {props.author} <br /> Genre: {props.genre} <br/> Pages: {props.pages}<br /> <button id="readButton" onClick={() => {return props.handleRead(props.index)}}> {text} </button>   
            <button id="deleteButton" onClick={()=> {return props.handleDelete(props.index) }}> delete </button>
        </div>
    )
}

export default Book