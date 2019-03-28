import {
    ACTION_BEGIN_FETCH, 
    ACTION_FETCH_SUCCESS,
    ACTION_FETCH_FAILED
} 
from './actionTypes'
import {URL_INSERT_PRODUCT} from './api'

const beginFetch = (url) => {
    return {
        type: ACTION_BEGIN_FETCH,
        url: URL_INSERT_PRODUCT
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
    fetchFailed
}