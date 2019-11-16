import React from 'react';

class AddBookForm extends React.Component {

    render() {
        let bookshelfBook = { book_id: this.props.book_id, bookshelf_id: this.props.bookshelf_id }
        return (  
            <li onClick={() => { this.props.addBook(bookshelfBook) }}> 
             {this.props.name}
            </li> 
        )
    }
}



export default AddBookForm