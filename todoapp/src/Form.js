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
            formDisplay : false
        }
        this.handleSubmit =  this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleDisplay = this.handleDisplay.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        const newBook = {title : this.state.bookTitle, author: this.state.author, 
        genre: this.state.genre, pages: this.state.pages, isRead: false}
        this.props.addBook(newBook)
        this.setState({bookTitle : ""})
        this.setState({author : ""})
        this.setState({genre : ""})
        this.setState({pages : ""})
    
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleDisplay(){
        this.setState({formDisplay: true})

    }

    render() {
        return (
            <>
            <button className="bookButton" onClick={this.handleDisplay}> New Book </button>
            
            <div id={this.state.formDisplay ? "formDisplayActive" : "formDisplayHidden"} >

            <form id="form" onSubmit={this.handleSubmit}>
                
                <ul id="inputList">
                    <li>
                    <input className="formItem" type="text" placeholder="Title" name="bookTitle" value={this.state.bookTitle} onChange={this.handleChange} />
                    </li>

                    <li>
                    <input className="formItem" type="text" placeholder="Author" name="author" value={this.state.author} onChange={this.handleChange} />
                    </li>

                    <li>
                    <input className="formItem" type="text" placeholder="Genre" name="genre" value={this.state.genre} onChange={this.handleChange} />
                    </li>

                    <li>
                    <input className="formItem" type="text" placeholder="Pages" name="pages" value={this.state.pages} onChange={this.handleChange} />
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