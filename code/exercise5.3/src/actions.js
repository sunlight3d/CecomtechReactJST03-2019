import {
    ACTION_DECREASE, 
    ACTION_INCREASE,

    ACTION_BEGIN_INSERT_PRODUCT,
    ACTION_INSERT_PRODUCT_SUCCESS,
    ACTION_INSERT_PRODUCT_FAILED,

} from './actionTypes'

export const increase = (step) => {
    return {
        type: ACTION_INCREASE,
        step
    }
}
export const decrease = (step) => {
    return {
        type: ACTION_DECREASE,
        step
    }
}  
export const beginInsertProduct = () => {
    return {type: ACTION_BEGIN_INSERT_PRODUCT}
}
export const insertProductSuccess = ({productId, productName, year, description}) => {
    return {
        type: ACTION_INSERT_PRODUCT_SUCCESS,
        productId, productName, year, description
    }
}
export const insertProductFailed = (error) => {
    return {
        type: ACTION_INSERT_PRODUCT_FAILED,
        error
    }
}

