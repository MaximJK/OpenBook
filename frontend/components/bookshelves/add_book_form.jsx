import React from 'react';

class AddBookForm extends React.Component {

    render() {
        let bookshelfBook = { book_id: this.props.book_id, bookshelf_id: this.props.bookshelf_id }
        debugger
        return (
            <li >
                <button type="submit" id='bookshelf-button' onClick={() => { this.props.addBook(bookshelfBook) }} className="submit"> {this.props.name} </button>
            </li>
        )
    }
}



export default AddBookForm