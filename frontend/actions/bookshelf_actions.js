import * as BookshelfUtil from "../util/bookshelf_api_util";
export const RECEIVE_BOOKSHELVES = 'RECEIVE_BOOKSHELVES';

export const fetchBookshelves = userId => dispatch => (
    BookshelfUtil.fetchBookshelves(userId).then(bookshelves =>
    dispatch(receiveBookshelves(bookshelves)))
)

const receiveBookshelves = bookshelves => ({
    type: RECEIVE_BOOKSHELVES,
    bookshelves

})

