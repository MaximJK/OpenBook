import { Link } from 'react-router-dom';
import React from 'react';
import { withRouter } from 'react-router-dom';

class BooksIndex extends React.Component {
    componentDidMount() {
        debugger
        this.props.fetchBooks();
    }

    render() {
        const books = this.props.books.map(book => {
            return (
                    <li className="book-li">
                        <img src={book.cover_url} />
                        <br/>
                        {book.title}
                    </li>
            )
        })
    return (
        <div className="books-div">
            <ul className="books-uls">
                {books}
            </ul>
        </div>

    )
    
    }
}
export default BooksIndex;