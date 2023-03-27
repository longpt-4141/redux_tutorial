import { todoListSelector } from "./todoListSelector";
import { searchTextSelector } from "./searchTextSelector";
import { createSelector } from "@reduxjs/toolkit";
import { statusTextSelector } from "./statusTextSelector";

export const todoSeparateByStatusSelector = createSelector(
    todoListSelector,
    statusTextSelector,
    (todoList, statusText) => {
        switch (statusText) {
            case "All" : 
                return todoList;
            case "Completed" :
                return todoList.filter(todo => todo.completed === true);
            case "Todo" :
                return todoList.filter(todo => todo.completed === false)
            default :
            return todoList
        }
    }
)

export const todoRemainingSelector = createSelector(
    searchTextSelector,
    todoSeparateByStatusSelector,
    (searchText, statusFilterReSult) => {
        return statusFilterReSult.filter((todo) => {
            return todo.name.toLowerCase().includes(searchText.toLowerCase());
        })
    }
)
