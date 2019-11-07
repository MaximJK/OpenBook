import * as BookshelfUtil from "../util/bookshelf_api_util";
export const RECEIVE_BOOKSHELVES = 'RECEIVE_BOOKSHELVES';
export const POST_BOOK = 'POST_BOOK';
export const REMOVE_BOOKSHELFBOOK = 'REMOVE_BOOKSHELFBOOK'

export const fetchBookshelves = userId => dispatch => (
    BookshelfUtil.fetchBookshelves(userId).then(bookshelves =>
    dispatch(receiveBookshelves(bookshelves)))
)
export const addBook = bookshelfBook => dispatch => (
    BookshelfUtil.addBook(bookshelfBook).then(bookshelfBook =>
        dispatch(postBook(bookshelfBook)))
)

export const removeBook = id => dispatch => (
    BookshelfUtil.removeBook(id).then(bookshelfBook =>
        dispatch(removeBookshelfBook(bookshelfBook)))
)


const receiveBookshelves = bookshelves => ({
    type: RECEIVE_BOOKSHELVES,
    bookshelves

})
const removeBookshelfBook = bookshelfBook => ({
    type: REMOVE_BOOKSHELFBOOK,
    bookshelfBook

})


const postBook = bookshelfBook => ({
    type: POST_BOOK,
    bookshelfBook
})


