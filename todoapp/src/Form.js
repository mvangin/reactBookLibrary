import React from "react"


class Form extends React.Component {
    
    constructor() {
        super()
        this.state = {
            bookTitle: "",
            isRead: false
        }
        this.handleSubmit =  this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        const newBook = {title : this.state.bookTitle, isRead: false}
        this.props.addBook(newBook)
        this.setState({bookTitle : ""})


    }

    handleChange(e) {
        this.setState({bookTitle: e.target.value})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" name="bookTitle" value={this.state.bookTitle} onChange={this.handleChange} />
                    <button type="submit"> Submit Note</button>
                </div>
            </form>
        )
    }
}

export default Form