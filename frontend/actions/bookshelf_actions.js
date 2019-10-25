import * as BookshelfUtil from "../util/bookshelf_api_util";
export const RECEIVE_BOOKSHELVES = 'RECEIVE_BOOKSHELVES';
export const POST_BOOK = 'POST_BOOK'

export const fetchBookshelves = userId => dispatch => (
    BookshelfUtil.fetchBookshelves(userId).then(bookshelves =>
    dispatch(receiveBookshelves(bookshelves)))
)
export const addBook = (book_id, bookshelf_id) => dispatch => (
    BookshelfUtil.addBook(book_id, bookshelf_id).then(book =>
    dispatch(postBook(book)))
)

const receiveBookshelves = bookshelves => ({
    type: RECEIVE_BOOKSHELVES,
    bookshelves

})

const postBook = book => ({
    type: POST_BOOK,
    book
})

