import {
    RECEIVE_BOOKSHELVES,
    POST_BOOK,

} from "../actions/bookshelf_actions";
import merge from 'lodash/merge';

const BookshelvesReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_BOOKSHELVES:
        
            return merge({}, action.bookshelves)
        case POST_BOOK:

            return state

        default:
            return state;
    }
};
export default BookshelvesReducer;