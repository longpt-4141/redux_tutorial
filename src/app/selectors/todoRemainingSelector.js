import { todoListSelector } from "./todoListSelector";
import { searchTextSelector } from "./searchTextSelector";
import { createSelector } from "@reduxjs/toolkit";
import { statusTextSelector } from "./statusTextSelector";
import { filterPrioritySelector } from "./filterPrioritySelector";

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

export const todoSeparateByPrioritySelector = createSelector(
    todoSeparateByStatusSelector,
    filterPrioritySelector,
    (todoListAfterSeparateByStatus, priority) => {
        const todoListAfterFilter = todoListAfterSeparateByStatus.filter((todo) => {
            return priority.includes(todo.priority)
        })
        if(todoListAfterFilter.length <= 0) {
            return todoListAfterSeparateByStatus
        }else{
            return todoListAfterFilter
        }
    }
)

export const todoRemainingSelector = createSelector(
    searchTextSelector,
    todoSeparateByPrioritySelector,
    (searchText, todoFilterReSult) => {
        return todoFilterReSult.filter((todo) => {
            return todo.name.toLowerCase().includes(searchText.toLowerCase());
        })
    }
)
