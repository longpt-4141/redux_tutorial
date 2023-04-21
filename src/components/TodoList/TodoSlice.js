// const initState = 
// [
//         {
//             id : 1,
//             name: 'Learn Yoga',
//             completed : false,
//             priority : "High"
//         },
//         {
//             id : 2,
//             name: 'Learn Code',
//             completed : true,
//             priority : "Medium"
//         },
//         {
//             id : 3,
//             name: 'Learn English',
//             completed : false,
//             priority : "Low"
//         }
// ]

// const todoReducer = (state = initState, action) => {
//     console.log({state, action});
//     switch(action.type) {
//         case 'todoList/addTodo':
//             return [
//                 ...state,
//                 action.payload
//                 ]
//         case 'todoList/changeTodoCompleted':
//             const newState = state.map(todo => todo.id === action.payload.id ? {...todo, completed: action.payload.completed} : todo)
//             return newState
//         default: 
//             return state
//     }
// }

// export default todoReducer

import { createSlice} from "@reduxjs/toolkit";

export default createSlice({
    name : 'todoList',
    initialState: 
        [
        {
            id : 1,
            name: 'Learn Yoga',
            completed : false,
            priority : "High"
        },
        {
            id : 2,
            name: 'Learn Code',
            completed : true,
            priority : "Medium"
        },
        {
            id : 3,
            name: 'Learn English',
            completed : false,
            priority : "Low"
        }
    ]
    ,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        changeTodoCompleted: (state, action)=> {
            const currentTodo = state.find(todo => todo.id === action.payload.id);
            if ( currentTodo ) {
                currentTodo.completed = action.payload.completed;
            }
        },
    }
})