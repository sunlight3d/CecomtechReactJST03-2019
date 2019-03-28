import {
    ACTION_DECREASE, 
    ACTION_INCREASE,

    ACTION_BEGIN_FETCH, 
    ACTION_FETCH_SUCCESS,
    ACTION_FETCH_FAILED,

    ACTION_CRUD_TYPE,
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

const beginFetch = ({url,responseData, model, modificationType}) => {
    return {
        type: ACTION_BEGIN_FETCH,
        url,responseData, model, modificationType
    }
}

const fetchSuccess = ({url,responseData, model, modificationType}) => {
    return {
        type: ACTION_FETCH_SUCCESS,
        url,
        responseData,
        model,//Product, user, ...
        modificationType,//insert, update, delete
        
    }
}
const fetchFailed = ({error, url,responseData,model, modificationType}) => {
    return {
        type: ACTION_FETCH_FAILED,
        error,        
        url,  
        responseData,      
        model,//Product, user, ...
        modificationType,//insert, update, delete
    }
}


export {
    beginFetch, 
    fetchSuccess,
    fetchFailed,
}


