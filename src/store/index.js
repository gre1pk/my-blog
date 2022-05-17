import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import articlesReduser from './reducers/articlesReduser'

const rootReducer = combineReducers({ articlesReduser })

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
