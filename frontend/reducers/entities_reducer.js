import { combineReducers } from "redux";
import BooksReducer from './books_reducer'
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer, books: BooksReducer
});

export default entitiesReducer;
