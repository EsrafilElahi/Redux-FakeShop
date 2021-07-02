import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from '../reducers/index'


const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

store.subscribe(() => store.getState())

export default store