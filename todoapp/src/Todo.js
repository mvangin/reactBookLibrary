import React from "react"


function Todo(props) {
    const text = props.isRead ? "read" : "not read"

    return(
        <div> 
            {props.title} <button onClick={() => {return props.handleRead(props.id)}}> {text} </button>   
        </div>
    )
}

export default Todo