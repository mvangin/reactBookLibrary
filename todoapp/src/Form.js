import React from "react"
import "./Form.css"
import { auth } from "./firebase"


class Form extends React.Component {

    constructor() {
        super()
        this.state = {
            title: "",
            author: "",
            genre: "",
            pages: "",
            isRead: false,
            formDisplay: false,
            totalReads: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleDisplay = this.handleDisplay.bind(this)
    }

    handleSubmit(e) {
        const displayName = auth.currentUser.displayName
        e.preventDefault()
        if (this.state.title === "" || this.state.author === "" || this.state.genre === ""
            || this.state.pagse === "") {
            return
        }

        const newBook = {
            title: this.state.title, author: this.state.author,
            genre: this.state.genre, pages: this.state.pages, isRead: false, totalReads: this.state.totalReads, postedBy: displayName

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
        this.setState({ title: "" })
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
                                <input className="formItem" type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange} required />
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