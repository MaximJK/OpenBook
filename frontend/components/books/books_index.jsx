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
                    <li>
                        <img src={book.cover_url} />
                        {book.title}
                    </li>
            )
        })
    return (
        <div>
            <ul>
                {books}
            </ul>
        </div>

    )
    
    }
}
export default BooksIndex;