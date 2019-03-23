import {
    ACTION_INSERT_PRODUCT, 
    ACTION_UPDATE_PRODUCT, 
    ACTION_DELETE_PRODUCT,
    ACTION_CHANGE_TYPE, //insert or "update" 
} 
from './actionTypes'

const insertProduct = ({productName, year, description}) => {
    return {
        type: ACTION_INSERT_PRODUCT,
        productName, 
        year, 
        description
    }
}
const updateProduct = ({productId, productName, year, description}) => {
    return {
        type: ACTION_UPDATE_PRODUCT,
        productId, productName, year, description
    }
}
const deleteProduct = (productId) => {
    return {
        type: ACTION_DELETE_PRODUCT,
        productId
    }
}
const changeModificationType = (modificationType="insert", productId='') => {
    return {
        type: ACTION_CHANGE_TYPE,
        modificationType,
        productId
    }
}
export {
    insertProduct,
    updateProduct, 
    deleteProduct,
    changeModificationType
}