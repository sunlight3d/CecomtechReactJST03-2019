import {combineReducers} from 'redux'
import {ACTION_INSERT_PRODUCT, 
    ACTION_INSERT_PRODUCT, 
    ACTION_DELETE_PRODUCT, 
    ACTION_UPDATE_PRODUCT,
    ACTION_CHANGE_TYPE
} from './actionTypes'
import {insertProduct, 
    updateProduct, 
    deleteProduct,
    changeModificationType
} from './actions'
const productReducer = (state = [], action) => {
    switch(action.type) {
        case ACTION_INSERT_PRODUCT: {
            const productId = `${Date.now()}`
            let {productName='', year=0, description=''} = action
            return [
                ...state,
                {productId, productName, year, description}
            ]
        }
        case ACTION_UPDATE_PRODUCT: {
            return state.map(product => {
                if (product.productId === action.productId) {                
                    return Object.assign({productName, year, description}, product)
                }
                return product
            })
        }
        case ACTION_DELETE_PRODUCT: {
            return state.filter(product => product.productId !== action.productId)
        }
        default:
            return state
    }
}
const modificationTypeReducer = (state={modificationType: "insert", productId=''}, action) => {
    switch(action.type) {
        case ACTION_CHANGE_TYPE: {
            return {
                modificationType: action.modificationType,
                productId: action.productId
            }
        }
    }
    return state
}

export default combineReducers({productReducer, modificationTypeReducer})