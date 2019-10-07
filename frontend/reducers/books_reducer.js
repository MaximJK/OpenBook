import 
{ RECEIVE_BOOKS,
RECEIVE_BOOK
 } from "../actions/book_actions";
import merge from 'lodash/merge';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOOKS:
            return Object.merge({}, action.books)
        case RECEIVE_BOOK:
            return Object.merge({}, state, { [action.nook.id]: action.book })
        default:
            return state;
    }
};