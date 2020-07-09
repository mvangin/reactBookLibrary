import React from "react"
import DataManager from "./DataManager"
import Todo from "./Todo"

class TodoList extends React.Component {

    constructor() {
        super()
        this.state = {
            todosData: DataManager.todos
        }
        this.handleRead = this.handleRead.bind(this)
    }

    //handle delete here thats passed down to Todo. 
    handleRead(id) {
        const updatedTodos = this.state.todosData.map(item => {
            if (item.id === id) {
                item.isRead ? item.isRead = false: item.isRead = true;
            }
            return item
        })
        this.setState({todosData : updatedTodos})
    }
   


    render() {
        const todoItems = DataManager.todos.map((item, key) => (
            <Todo title={item.title} isRead={item.isRead} key={key} id={key} handleRead={this.handleRead} />
        ))
        return (
            <div>
                {todoItems}
            </div>
        )

    }

}


export default TodoList