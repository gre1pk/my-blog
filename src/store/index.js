import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import articlesReducer from './reducers/articlesReducer'
import articleReducer from './reducers/articleReducer'
import userReducer from './reducers/userReducer'

const rootReducer = combineReducers({ articlesReducer, articleReducer, userReducer })

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
