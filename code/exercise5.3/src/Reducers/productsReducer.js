import {
    ACTION_DECREASE, 
    ACTION_INCREASE,

    ACTION_BEGIN_INSERT_PRODUCT,
    ACTION_INSERT_PRODUCT_SUCCESS,
    ACTION_INSERT_PRODUCT_FAILED,
    
    ACTION_BEGIN_UPDATE_PRODUCT,
    ACTION_UPDATE_PRODUCT_SUCCESS,
    ACTION_UPDATE_PRODUCT_FAILED,
    
    ACTION_BEGIN_DELETE_PRODUCT,
    ACTION_DELETE_PRODUCT_SUCCESS,
    ACTION_DELETE_PRODUCT_FAILED,    
} from '../actionTypes'

//1 Model => 1 Reducer => N actions => 
const INITIAL_STATE = {
    loading: false,
    products: [],
    error: null
}
const productsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ACTION_BEGIN_INSERT_PRODUCT:
            return {
                ...state,
                loading: true
            }
        case ACTION_INSERT_PRODUCT_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                products: [...state.products, action.newProduct]
            }
        case ACTION_INSERT_PRODUCT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        //update
        case ACTION_BEGIN_UPDATE_PRODUCT:
            return {
                ...state,
                loading: true
            }
        case ACTION_UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: state.products.map(product => {
                    if(product.productId === action.updatedProduct.productId) {
                        return action.updatedProduct
                    }
                    return product
                })
            }
        case ACTION_UPDATE_PRODUCT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        //delete
        case ACTION_BEGIN_DELETE_PRODUCT:
            return {
                ...state,
                loading: true
            }
        case ACTION_DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: state.products.filter(product => {
                    return product.productId === action.productId
                })
            }
        case ACTION_UPDATE_PRODUCT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}
export default productsReducer