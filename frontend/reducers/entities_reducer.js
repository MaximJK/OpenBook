import { combineReducers } from "redux";
import BooksReducer from './books_reducer'
import UsersReducer from "./users_reducer";
import ReviewsReducer from "./reviews_reducer";
import BookshelvesReducer from "./bookshelves_reducer";
import BookshelvesBooksReducer from "./bookshelf_book_reducer"
  
const entitiesReducer = combineReducers({
  users: UsersReducer, books: BooksReducer, reviews: ReviewsReducer, bookshelves: BookshelvesReducer, bookshelf_book: BookshelvesBooksReducer
});

export default entitiesReducer;
