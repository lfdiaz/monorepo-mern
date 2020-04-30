import { createSelector } from "@reduxjs/toolkit";

const todoSelector = state => state.todos;

const getTodos = createSelector(todoSelector, todo => {
  return todo;
});

export const selectors = { getTodos };
