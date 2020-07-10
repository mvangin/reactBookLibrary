import React from "react"


function Todo(props) {
    const text = props.isRead ? "read" : "not read"

    return(
        <div> 
            {props.title} <button onClick={() => {return props.handleRead(props.index)}}> {text} </button>   
            <button onClick={()=> {return props.handleDelete(props.index) }}> delete </button>
        </div>
    )
}

export default Todo