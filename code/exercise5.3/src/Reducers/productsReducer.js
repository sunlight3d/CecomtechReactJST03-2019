import {
    ACTION_BEGIN_FETCH, 
    ACTION_FETCH_SUCCESS,
    ACTION_FETCH_FAILED

} from '../actionTypes'
import {
    fetchSuccess, fetchFailed, beginFetch
} from '../actions'
//1 Model => 1 Reducer => N actions => 
const INITIAL_STATE = {
    url: '',
    responseData: {},
    error:null,
    message:''
}
const productsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ACTION_BEGIN_FETCH: {
            return {
                url: action.url
            }
        }
        case ACTION_FETCH_SUCCESS: {
            return {
                responseData: action.responseData
            }
        }
        case ACTION_FETCH_FAILED: {
            return {
                error: action.error,
                message: action.message
            }
        }
        default:
            return state
    }
}
export default productsReducer