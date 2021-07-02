
export const searching = (search) => {
    return async (dispatch, getState) => {
        let copyProducts = [...getState().products]
        let filteredSearchProducts = copyProducts.filter((product) => (
            product.title.toLowerCase().includes(search.toLowerCase())
        ))

        await dispatch({ type: 'SEARCHING', payload: filteredSearchProducts })
    }
}

export const clearFounded = () => {
    return async (dispatch) => {
        await dispatch({ type: 'CLEAR_FOUNDED', payload: [] })
    }
}
