export const RECEIVE_BOOKS = 'RECEIVE_BOOKS'
export const RECEIVE_BOOK = 'RECEIVE_BOOK'
import * as BooksUtil from "../util/books_api_util";

const receiveBooks = books => ({
    type: RECEIVE_BOOKS,
    books
});

const receiveBook = book => ({
    type: RECEIVE_BOOK,
    book
});

export const fetchBooks = () => dispatch => (
    BooksUtil.fetchBooks().then(books => 
        dispatch(receiveBooks(books)))
    
);


export const fetchBook = id => dispatch => (
    BooksUtil.fetchBook(id).then(book => 
        dispatch(receiveBook(book))
    
    )
);
