import {
    RECEIVE_BOOKSHELVES,
    POST_BOOK,

} from "../actions/bookshelf_actions";
import merge from 'lodash/merge';

const BookshelvesBooksReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case POST_BOOK:

            return merge({}, state, action.bookshelfBook)

        default:
            return state
    }
};
export default BookshelvesBooksReducer;