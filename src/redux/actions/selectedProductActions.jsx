import axios from 'axios'


export const selectedProduct = (id) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
            console.log("id action : ", id)
            await dispatch({ type: 'SELECTED_PRODUCT', payload: res.data })
        } catch (err) {
            console.log(err)
        }
    }
}


export const removeSelectedProduct = () => {
    return async (dispatch) => {
        dispatch({ type: 'REMOVE_SELECTED_PRODUCT', payload: {} })
    }
}
