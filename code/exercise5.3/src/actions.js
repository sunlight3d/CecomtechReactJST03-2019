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

const beginFetch = (url) => {
    return {
        type: ACTION_BEGIN_FETCH,
        url
    }
}

const fetchSuccess = (responseData) => {
    return {
        type: ACTION_FETCH_SUCCESS,
        responseData
    }
}
const fetchFailed = (error, message) => {
    return {
        type: ACTION_FETCH_FAILED,
        error, message
    }
}


export {
    beginFetch, 
    fetchSuccess,
    fetchFailed,
}


