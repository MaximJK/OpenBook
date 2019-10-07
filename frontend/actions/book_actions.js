export const RECEIVE_BOOKS = 'RECEIVE_BOOKS'
export const RECEIVE_BOOK = 'RECEIVE_BOOK'
import * as BooksUtil from "../util/books_api_util";

const receiveBooks = () => ({
    type: RECEIVE_BOOKS,
    books
});

const receiveBook = book => ({
    type: RECEIVE_SESSION_ERRORS,
    book
});

export const fetchBooks = () => dispatch => (
    BooksUtil.fetchBooks().then(books => (
        dispatch(fetchBooks())
    )
    )
);


export const fetchBook = id => dispatch => (
    BooksUtil.fetchBooks(id).then(book => (
        dispatch(fetchBooks(book))
    )
    )
);
