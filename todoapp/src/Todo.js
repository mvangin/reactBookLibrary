import React from "react"


function Todo(props) {
    const text = props.isRead ? "read" : "not read"

    return(
        <div> {props.title} {text} id={props.id}</div>
    )
}

export default Todo