import { combineReducers } from "redux";
import BooksReducer from './books_reducer'
import UsersReducer from "./users_reducer";
debugger
const entitiesReducer = combineReducers({
  users: UsersReducer, books: BooksReducer
});

export default entitiesReducer;
