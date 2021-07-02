import { combineReducers } from 'redux'

import { basketReducer } from './basketReducer'
import { productsReducer } from './productsReducer'
import { selectedProductReducer } from './selectedProductReducer'
// import { searchReducer } from './searchReducer'
// import { foundedReducer } from './foundedReducer'

export const rootReducer = combineReducers({
    products: productsReducer,
    selected: selectedProductReducer,
    basket: basketReducer,
})
