import {createStore, applyMiddleware, combineReducers} from 'redux'
import budgetReducer from './budgetReducer'
import promiseMiddleware from 'redux-promise-middleware'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    budget: budgetReducer,
    user: userReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))