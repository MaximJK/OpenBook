import {
    RECEIVE_BOOKSHELVES,
    POST_BOOK,
    REMOVE_BOOKSHELFBOOK

} from "../actions/bookshelf_actions";
import merge from 'lodash/merge';

const BookshelfBooksReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case POST_BOOK:

            return merge({}, state, action.bookshelfBook)
        
        default:
            return state
    }
};
export default BookshelfBooksReducer;