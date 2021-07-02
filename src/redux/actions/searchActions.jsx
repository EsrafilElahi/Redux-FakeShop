
export const setSearch = (e) => {
    return async (dispatch) => {
        let value = e.target.value.toLowerCase()
        await dispatch({ type: 'SET_SEARCH', payload: value })
    }
}

export const clearSearch = () => {
    return async (dispatch) => {
        await dispatch({ type: 'CLEAR_SEARCH', payload: "" })
    }
}
