import {
    ACTION_DECREASE, 
    ACTION_INCREASE,
    ACTION_INSERT_PRODUCT,
    ACTION_UPDATE_PRODUCT,
    ACTION_DELETE_PRODUCT,
    ACTION_CRUD_TYPE
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

//1 Model = > N actions
export const insertProduct = ({productName, year, description}) => {
    return {
        type: ACTION_INSERT_PRODUCT,
        newProduct: {productName, year, description}
    }
}
export const updateProduct = ({productId, productName, year, description}) => {
    return {
        type: ACTION_UPDATE_PRODUCT,
        updatedProduct: {productId, productName, year, description}
    }
}
export const deleteProduct = (productId) => {
    return {
        type: ACTION_DELETE_PRODUCT,
        productId
    }
}
export const changeCrudType = (crudType="insert", productId="") => {
    
    return {
        type: ACTION_CRUD_TYPE,
        crudType, //update, insert,
        productId
    }
}


