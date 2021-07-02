
export const foundedReducer = (state = [], action) => {

    switch (action.type) {
        case 'SEARCHING':
            return [...action.payload]

        case 'CLEAR_FOUNDED':
            return [...action.payload]

        default:
            return state
    }
}

