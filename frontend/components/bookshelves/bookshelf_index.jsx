

import { Link } from 'react-router-dom';
import React from 'react';
import { withRouter } from 'react-router-dom';
import ShowBookshelf from './show_bookshelf';

class BookshelfIndex extends React.Component {
    componentDidMount() {
        
        this.props.fetchBookshelves(this.props.userId);
    }
    
  
    render() {
        
        let { bookshelves } = this.props;
        let bookshelfNames
        debugger
        if (Object.keys(bookshelves).length === 0 || !bookshelves) {
            bookshelves = ''
        } else {
            
            debugger
            bookshelfNames = Object.values(bookshelves).map(bookshelf => {
                let bookTitles = bookshelf.book.map((bookX, i) => {
                    return (
                        <ShowBookshelf
                        key={bookX.id + i}
                        cover={bookX.data.cover_url}
                        id={bookX.data.id}
                        title={bookX.data.title}
                        removeBook={this.props.removeBook}
                        bookshelf={bookX.id}
                        author={bookX.data.author}
                        />
                      
                    )
                })
                if (bookTitles.length === 0) {
                    bookTitles = <Link to={'/home'}> add books </Link>;
                    

                }
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