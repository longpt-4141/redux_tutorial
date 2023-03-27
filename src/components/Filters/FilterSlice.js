const initState = {
        search: '',
        status: 'ALL',
        priority : []
}

const filterReducer = (state = initState, action) => {
    switch(action.type) {
        case 'filters/searchFilterChange': 
            return {
                    ...state,
                    search: action.payload
                }
        case 'filters/statusFilterChange':
            return {
                ...state,
                status: action.payload
            }
        default: 
            return state
    }
}

export default filterReducer
