import React from "react"
import "./Book.css"
import checkmark from "./images/checkmark.png"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


function Book(props) {
    const text = props.isRead ? <img id="checkmark" src={checkmark} alt="checkmark"/> : "Not Yet" 
    return(
        <div id="book"> 
            <b id="title">{props.title} </b> <br /> Author: {props.author} <br /> Genre: {props.genre} <br/> Pages: {props.pages}<br /> Finished? {text} <br /> Posted by: {props.postedBy}
            <div id="buttonDiv">
            <button id="readButton" onClick={() => {return props.handleRead(props.index)}}> Read Status </button>   
            <DeleteForeverIcon id="deleteButton" onClick={()=> {return props.handleDelete(props.index) }}> delete </DeleteForeverIcon>
            </div>
        </div>
    )
}

export default Book