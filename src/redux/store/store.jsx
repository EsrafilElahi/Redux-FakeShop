import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import persistedReducer from './../reducers/index';


const store = createStore(persistedReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

const persistor = persistStore(store)

store.subscribe(() => store.getState())

export default persistor
export default store
