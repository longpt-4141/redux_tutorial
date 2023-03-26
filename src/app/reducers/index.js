const initState = {
    filters : {
        search: '',
        status: 'ALL',
        priority : []
    },
    todoList : [
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
    ],
}

const rootReducer = (state = initState, action) => {
    console.log({state, action});
    switch(action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoList : [
                ...state.todoList,
                action.payload
                ]
            }
        default: 
            return state
    }
}

export default rootReducer