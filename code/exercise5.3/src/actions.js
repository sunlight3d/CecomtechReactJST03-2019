import {URL_INSERT_PRODUCT, 
    URL_UPDATE_PRODUCT, 
    URL_QUERY_PRODUCT,
    URL_DELETE_PRODUCT} from './api'

import axios from 'axios'
import {
    ACTION_DECREASE, 
    ACTION_INCREASE,

    ACTION_BEGIN_INSERT_PRODUCT,
    ACTION_INSERT_PRODUCT_SUCCESS,
    ACTION_INSERT_PRODUCT_FAILED,

    ACTION_QUERY_PRODUCT_SUCCESS,
    ACTION_QUERY_PRODUCT_FAILED,
    
    ACTION_BEGIN_UPDATE_PRODUCT,
    ACTION_UPDATE_PRODUCT_SUCCESS,
    ACTION_UPDATE_PRODUCT_FAILED,
    
    ACTION_BEGIN_DELETE_PRODUCT,
    ACTION_DELETE_PRODUCT_SUCCESS,
    ACTION_DELETE_PRODUCT_FAILED,    

} from './actionTypes'
import  querystring from 'querystring'

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
    return (dispatch, getState) => {
        dispatch(beginInsertProduct())                
        axios({
            method: 'post',
            url: URL_INSERT_PRODUCT,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            timeout: 5000,
            data: {productName, year, description}
          }).then(response => {            
            dispatch(insertProductSuccess(response.data))
        }).catch(error => {
            dispatch(insertProductFailed(error))
        })         
    }
}

export const beginInsertProduct = () => {
    return {
        type: ACTION_BEGIN_INSERT_PRODUCT
    }
}
export const insertProductSuccess = (newProduct) => ({
    type: ACTION_INSERT_PRODUCT_SUCCESS,
    newProduct
})
export const insertProductFailed = (error) => ({
    type: ACTION_INSERT_PRODUCT_FAILED,
    error
})

export const queryProduct = (limit, page) => {
    return (dispatch, getState) => {        
        console.log(`Start query product. State = ${getState()}`)
        axios.get(URL_QUERY_PRODUCT+"?"+querystring.stringify({limit, page})).
            then(response => {                                
                dispatch(queryProductSuccess(response.data.products))
            }).catch(error => {
                dispatch(queryProductFailed(error))
            })        
    }
}

export const queryProductSuccess = (products=[]) => ({
    type: ACTION_QUERY_PRODUCT_SUCCESS,        
    products
})
export const queryProductFailed = (error) => ({
    type: ACTION_QUERY_PRODUCT_FAILED,
    error
})

export const beginUpdateProduct = () => {
    return {
        type: ACTION_BEGIN_UPDATE_PRODUCT
    }
}

export const updateProduct = ({productId,productName, year, description}) => {
    return (dispatch, getState) => {
        dispatch(beginUpdateProduct())
        console.log(`Start updating product. State = ${getState()}`)
        axios.put(URL_UPDATE_PRODUCT, {productId, productName, year, description}).
            then(response => {
                dispatch(updateProductSuccess(response.data))
            }).catch(error => {
                dispatch(updateProductFailed(error))
            })        
    }
}
export const updateProductSuccess = (updatedProduct) => ({
    type: ACTION_UPDATE_PRODUCT_SUCCESS,
    updatedProduct
})
export const updateProductFailed = (error) => ({
    type: ACTION_UPDATE_PRODUCT_FAILED,
    error    
})

export const beginDeleteProduct = () => {
    return {
        type: ACTION_BEGIN_DELETE_PRODUCT
    }
}
export const deleteProduct = (productId) => {
    return (dispatch, getState) => {
        dispatch(beginDeleteProduct())
        console.log(`Start deleting product. State = ${getState()}`)
        axios.delete(URL_DELETE_PRODUCT, {productId}).
            then(response => {
                dispatch(deleteProductSuccess(response.data))
            }).catch(error => {
                dispatch(deleteProductFailed(error))
            })        
    }
}

export const deleteProductSuccess = (productId) => ({
    type: ACTION_DELETE_PRODUCT_SUCCESS,
    productId
})

export const deleteProductFailed = (error) => ({
    type: ACTION_DELETE_PRODUCT_FAILED,
    error    
})
