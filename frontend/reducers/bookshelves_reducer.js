import {
    RECEIVE_BOOKSHELVES,

} from "../actions/bookshelf_actions";
import merge from 'lodash/merge';

const BookshelvesReducer = (state = {}, action) => {
    Object.freeze(state);
    debugger
    switch (action.type) {
        case RECEIVE_BOOKSHELVES:
        debugger
            return merge({}, action.bookshelves)
        default:
            return state;
    }
};
export default BookshelvesReducer;