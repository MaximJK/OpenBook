import { combineReducers } from "redux";
import BooksReducer from './books_reducer'
import UsersReducer from "./users_reducer";
import ReviewsReducer from "./reviews_reducer";
  
const entitiesReducer = combineReducers({
  users: UsersReducer, books: BooksReducer, reviews: ReviewsReducer
});

export default entitiesReducer;
