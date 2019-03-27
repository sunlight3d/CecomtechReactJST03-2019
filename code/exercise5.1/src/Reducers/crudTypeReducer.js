
import { ACTION_CRUD_TYPE } from '../actionTypes'

//1 model = 1 reducer = 1 "function" = "set state"
const crudTypeReducer = (state = {crudType: 'insert', productId:''}, action) => {
    switch(action.type) {
        case ACTION_CRUD_TYPE: {
            return {
                crudType: action.crudType, 
                productId: action.productId
            }
        }        
        default:
            return state
    }
}
export default crudTypeReducer