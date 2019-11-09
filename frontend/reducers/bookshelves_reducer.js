import {
    RECEIVE_BOOKSHELVES,
    REMOVE_BOOKSHELFBOOK,
    POST_BOOK
} from "../actions/bookshelf_actions";
import merge from 'lodash/merge';

const BookshelvesReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_BOOKSHELVES:
        
            return merge({}, action.bookshelves)
       
        case REMOVE_BOOKSHELFBOOK:
            debugger
            let newState = merge({}, state);
            debugger
            Object.values(newState).forEach(sBookshelf => {
                for (var i = 0; i < sBookshelf.book.length; i++) {
                    if (sBookshelf.book[i].bookshelfBook == action.id) {
                        sBookshelf.book.splice(i, 1); break;
                    }
                }
            });
            return newState;
        default:
            return state
    }
};
export default BookshelvesReducer;