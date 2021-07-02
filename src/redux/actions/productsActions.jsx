import axios from 'axios'


export const addElectronics = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`https://fakestoreapi.com/products/category/electronics`)
            await dispatch({ type: 'ADD_ELECTRONICS', payload: res.data })
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const addJewelery = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`https://fakestoreapi.com/products/category/jewelery`)
            await dispatch({ type: 'ADD_JEWELERY', payload: res.data })
        }
        catch (err) {
            console.log(err)
        }
    }
}


export const addMenClothing = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`https://fakestoreapi.com/products/category/men's clothing`)
            await dispatch({ type: 'ADD_MEN_CLOTHING', payload: res.data })
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const addWomenClothing = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`https://fakestoreapi.com/products/category/women's clothing`)
            await dispatch({ type: 'ADD_WOMEN_CLOTHING', payload: res.data })
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const removeProductsList = () => {
    return async (dispatch) => {
        await dispatch({ type: 'REMOVE_PRODUCTS_LIST', payload: [] })
    }
}

