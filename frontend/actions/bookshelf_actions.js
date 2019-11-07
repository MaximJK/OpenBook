import * as BookshelfUtil from "../util/bookshelf_api_util";
export const RECEIVE_BOOKSHELVES = 'RECEIVE_BOOKSHELVES';
export const POST_BOOK = 'POST_BOOK';
export const RECEIVE_BOOKSHELFBOOK = 'RECEIVE_BOOKSHELFBOOK'

export const fetchBookshelves = userId => dispatch => (
    BookshelfUtil.fetchBookshelves(userId).then(bookshelves =>
    dispatch(receiveBookshelves(bookshelves)))
)
export const addBook = bookshelfBook => dispatch => (
    BookshelfUtil.addBook(bookshelfBook).then(bookshelfBook =>
        dispatch(postBook(bookshelfBook)))
)
export const fetchBookshelfBook = bookshelfBookId => (
    BookshelfUtil.fetchBookshelfBook(bookshelfBookId).then(bookshelfBook =>
        dispatch(receiveBookshelfBook(bookshelfBook))))

const receiveBookshelves = bookshelves => ({
    type: RECEIVE_BOOKSHELVES,
    bookshelves

})
const receiveBookshelfBook = bookshelfBook => ({
    type: RECEIVE_BOOKSHELFBOOK,
    bookshelfBook

})


const postBook = bookshelfBook => ({
    type: POST_BOOK,
    bookshelfBook
})


