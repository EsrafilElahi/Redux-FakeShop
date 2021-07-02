
export const productsReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD_JEWELERY':
            return [...action.payload]

        case 'ADD_ELECTRONICS':
            return [...action.payload]

        case 'ADD_MEN_CLOTHING':
            return [...action.payload]

        case 'ADD_WOMEN_CLOTHING':
            return [...action.payload]

        case 'REMOVE_PRODUCTS_LIST':
            return [...action.payload]

        default:
            return state
    }
}