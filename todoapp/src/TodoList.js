import React from "react"
import DataManager from "./DataManager"
import Todo from "./Todo"

class TodoList extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: DataManager.todos
        }
    }


    render() {
       const todoItems = this.state.todos.map((item, key) => (
            <Todo title={item.title} isRead={item.isRead} key={key} id={key} />
       ))
        return (
            <div>
                 {todoItems}
            </div>
        )

    }

}


export default TodoList