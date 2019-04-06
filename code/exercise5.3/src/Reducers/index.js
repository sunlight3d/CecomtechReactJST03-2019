import counterReducer from './counterReducer'
import productsReducer from './productsReducer'
import {combineReducers} from 'redux'

//1 rootReducer => N reducers
const rootReducer = combineReducers({
    counterReducer, 
    productsReducer,    
})
export default rootReducer
