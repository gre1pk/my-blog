import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import articlesReducer from './reducers/articlesReducer'
import articleReducer from './reducers/articleReducer'
import userReducer from './reducers/userReducer'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({ articlesReducer, articleReducer, userReducer })

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))

export const persistor = persistStore(store)
export default store
