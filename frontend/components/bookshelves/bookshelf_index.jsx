

import { Link } from 'react-router-dom';
import React from 'react';
import { withRouter } from 'react-router-dom';
import ShowBookshelf from './show_bookshelf';
// add more social elements
class BookshelfIndex extends React.Component {
    componentDidMount() {
        
        this.props.fetchBookshelves(this.props.bookshelfId);
    }
    componentDidUpdate(prevProps) {
        debugger
        if (prevProps.bookshelfId != this.props.bookshelfId) {
            this.props.fetchBookshelves(this.props.bookshelfId);
        }
    }
    

    render() {
        
        let { bookshelves, userId, bookshelfId } = this.props;
        let bookshelfNames
        let myShelf = false
        if (userId === parseInt(bookshelfId)) {
            myShelf = true
        }
        
        if (Object.keys(bookshelves).length === 0 || !bookshelves) {
            bookshelves = ''
        } else {
            
             
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
                        myShelf={myShelf}
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
export default withRouter(BookshelfIndex);