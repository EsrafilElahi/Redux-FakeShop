
export const addProductBasket = (product) => {
    return async (dispatch) => {
        await dispatch({ type: 'ADD_PRODUCT_BASKET', payload: product })
    }
}


export const deleteProductBasket = (id) => {
    return async (dispatch, getState) => {
        let Basket = [...getState().basket]
        let filteredBasket = Basket.filter((product) => product.id !== id)
        await dispatch({ type: "DELETE_PRODUCT_BASKET", payload: filteredBasket })
    }
}

