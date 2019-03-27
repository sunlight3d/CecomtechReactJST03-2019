import {
    ACTION_INSERT_PRODUCT, 
    ACTION_UPDATE_PRODUCT,
    ACTION_DELETE_PRODUCT
} from '../actionTypes'
import {
    insertProduct, updateProduct, deleteProduct
} from '../actions'
//1 Model => 1 Reducer => N actions => 
const productsReducer = (state = [], action) => {
    switch(action.type) {
        case ACTION_INSERT_PRODUCT: {
            let newProduct = Object.assign({}, action.newProduct)
            newProduct.productId = `${Date.now()}`
            return [
                ...state,
                newProduct
            ]
            //return state.concat(action.newProduct)
        }
        case ACTION_UPDATE_PRODUCT: {
            return state.map(product => {
                if(product.productId === action.updatedProduct.productId) {
                    return action.updatedProduct
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
export default productsReducer