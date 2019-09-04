import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer'

let initialState = {}
export default createStore(rootReducer, initialState)