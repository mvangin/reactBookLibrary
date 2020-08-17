import React from "react"
import "./Form.css"

class Form extends React.Component {

    constructor() {
        super()
        this.state = {
            bookTitle: "",
            author: "",
            genre: "",
            pages: "",
            isRead: false,
            formDisplay: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleDisplay = this.handleDisplay.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        if (this.state.bookTitle === "" || this.state.author === "" || this.state.genre === ""
            || this.state.pagse === "") {
            return
        }

        const newBook = {
            title: this.state.bookTitle, author: this.state.author,
            genre: this.state.genre, pages: this.state.pages, isRead: false
        }
        this.props.addBook(newBook)
        this.handleDisplay()
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleDisplay() {
        this.setState(prevState => ({ formDisplay: !prevState.formDisplay }))
        this.clearForm()
    }

    clearForm() {
        this.setState({ bookTitle: "" })
        this.setState({ author: "" })
        this.setState({ genre: "" })
        this.setState({ pages: "" })
    }

    render() {
        return (
            <>
                <button className="bookButton" onClick={this.handleDisplay}> Add New Book </button>

                <div id={this.state.formDisplay ? "formDisplayActive" : "formDisplayHidden"} >

                    <form id="form" onSubmit={this.handleSubmit}>

                        <ul id="inputList">
                            <div id="cancelForm" onClick={this.handleDisplay}>
                                +
                    </div>
                            <li>
                                <input className="formItem" type="text" placeholder="Title" name="bookTitle" value={this.state.bookTitle} onChange={this.handleChange} required />
                            </li>

                            <li>
                                <input className="formItem" type="text" placeholder="Author" name="author" value={this.state.author} onChange={this.handleChange} required />
                            </li>

                            <li>
                                <input className="formItem" type="text" placeholder="Genre" name="genre" value={this.state.genre} onChange={this.handleChange} required />
                            </li>

                            <li>
                                <input className="formItem" type="number" placeholder="Pages" name="pages" value={this.state.pages} onChange={this.handleChange} required />
                            </li>

                            <button type="submit" className="bookButton"> Submit Note</button>
                        </ul>
                    </form>
                </div>
            </>
        )
    }
}

export default Form