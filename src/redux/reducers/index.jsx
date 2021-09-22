import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { basketReducer } from './basketReducer'
import { productsReducer } from './productsReducer'
import { selectedProductReducer } from './selectedProductReducer'
// import { searchReducer } from './searchReducer'
// import { foundedReducer } from './foundedReducer'

const rootReducer = combineReducers({
    products: productsReducer,
    selected: selectedProductReducer,
    basket: basketReducer,
})

const configReducer = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(configReducer, rootReducer) 

export default persistedReducer
