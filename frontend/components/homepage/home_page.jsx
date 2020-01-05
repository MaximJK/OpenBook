import React from 'react';
import BooksIndexContainer from "../books/books_index_container"


class HomePage extends React.Component {

    componentDidMount() {
         
       
        // if (this.props.bookshelves.book_ids) {
        //     this.props.bookshelves.forEach(bookshelf => {
        //         bookshelf.book_ids.forEach(bookId => {
        //             this.props.fetchBook(bookId)
                    
        //         })

            // });
        }
    
    render() {
    return (
        <div className="books-splash">
            <BooksIndexContainer
            />
        </div>
    )}}

export default HomePage