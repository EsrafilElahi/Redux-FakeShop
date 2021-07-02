
export const selectedProductReducer = (state = {}, action) => {

    switch (action.type) {
        case 'SELECTED_PRODUCT':
            return action.payload

        case 'REMOVE_SELECTED_PRODUCT':
            return {}

        default:
            return state

    }
}