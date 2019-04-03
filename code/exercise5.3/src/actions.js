import {
    ACTION_DECREASE, 
    ACTION_INCREASE,

    ACTION_BEGIN_INSERT_PRODUCT,
    ACTION_INSERT_PRODUCT_SUCCESS,
    ACTION_INSERT_PRODUCT_FAILED,
    ACTION_DELETE_PRODUCT
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
export const insertProduct = ({productName, year, description}) => {
    return dispatch => {
        dispatch(beginInsertProduct())
        
    }
}