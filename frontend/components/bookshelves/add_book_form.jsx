import React from 'react';

class AddBookForm extends React.Component {

    render() {
        let bookshelfBook = { book_id: this.props.book_id, bookshelf_id: this.props.bookshelf_id }
        debugger
        return (    
            <button onClick={() => { this.props.addBook(bookshelfBook) }} > {this.props.name} </button>
        )
    }
}



export default AddBookForm