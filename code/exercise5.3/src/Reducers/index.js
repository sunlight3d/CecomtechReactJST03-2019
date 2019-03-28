import counterReducer from './counterReducer'
import productsReducer from './productsReducer'
import crudTypeReducer from './crudTypeReducer'

import {combineReducers} from 'redux'

//1 rootReducer => N reducers
const rootReducer = combineReducers({
    counterReducer, 
    productsReducer,
    crudTypeReducer
})
export default rootReducer
