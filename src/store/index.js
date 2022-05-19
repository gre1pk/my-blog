import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import articlesReducer from './reducers/articlesReducer'
import articleReducer from './reducers/articleReducer'

const rootReducer = combineReducers({ articlesReducer, articleReducer })

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
