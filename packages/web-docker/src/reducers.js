import { combineReducers } from "@reduxjs/toolkit";
import todosReducer from "./features/todo/todosSlice";

export default combineReducers({
  todos: todosReducer
});
