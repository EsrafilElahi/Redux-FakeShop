
export const basketReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD_PRODUCT_BASKET':
            return [...state, { ...action.payload }]

        case 'DELETE_PRODUCT_BASKET':
            return [...action.payload ]

        default:
            return state
    }

}