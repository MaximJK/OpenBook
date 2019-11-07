

import { Link } from 'react-router-dom';
import React from 'react';
import { withRouter } from 'react-router-dom';

class BookshelfIndex extends React.Component {
    componentDidMount() {
        debugger
        this.props.fetchBookshelves(this.props.userId);
    }

    render() {
        debugger
        let { bookshelves } = this.props;
        let bookshelfNames
        if (Object.keys(bookshelves).length === 0 || !bookshelves) {
            bookshelves = ''
        } else {
            
            debugger
            bookshelfNames = Object.values(bookshelves).map(bookshelf => {
                let bookTitles = bookshelf.book.map(bookX => {
                    return (
                        <li>
                            <img src={bookX.cover_url} alt=""/>
                            {bookX.title}
                        </li>
                    )
                })
            return (
                <li >
                    {bookshelf.name}
                    <ul>
                        
                        {bookTitles}
                        
                    </ul>
                </li>
            )})};
        return (
            <div className="bookshelf-div">
                <ul className="bookshelf-uls">
                    {bookshelfNames}
                </ul>
            </div>

        )

    };
}
export default BookshelfIndex;