

import { Link } from 'react-router-dom';
import React from 'react';
import { withRouter } from 'react-router-dom';

class BookshelfIndex extends React.Component {
    componentDidMount() {
        debugger
        this.props.fetchBookshelves(this.props.userId);
        if (this.props.bookshelves.book_ids) {
            this.props.bookshelves.book_ids.forEach(id => {
            this.props.fetchBook(id)
        });
    }}

    render() {
        let { books } = this.props
        let { bookshelves } = this.props;
        if ( !books || Object.keys(books).length == 0) {
            books = ''
        }
        else {
            books = Object.values(this.props.books).map(book => {
                return (
                    <li className="book-li">
                        <img src={book.cover_url}/>
                        {book.name}
                    </li>
                )
            }
            )}
        

        if (Object.keys(bookshelves).length === 0 || !bookshelves) {
            bookshelves = ''
        }
        else {
            bookshelves = Object.values(this.props.bookshelves).map(bookshelf => {
            return (
                <li >
                    {bookshelf.name}
                </li>
            )})}
        return (
            <div className="bookshelf-div">
                <ul className="bookshelf-uls">
                    {bookshelves}
                    {books}
                </ul>
            </div>

        )

    }
}
export default BookshelfIndex;