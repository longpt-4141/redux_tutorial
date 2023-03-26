import { todoListSelector } from "./todoListSelector";
import { searchTextSelector } from "./searchTextSelector";
import { createSelector } from "@reduxjs/toolkit";

export const todoRemainingSelector = createSelector(
    todoListSelector,
    searchTextSelector,
    (todoList, searchText) => {
        return todoList.filter((todo) => {
            return todo.name.toLowerCase().includes(searchText.toLowerCase());
        })
    }
)