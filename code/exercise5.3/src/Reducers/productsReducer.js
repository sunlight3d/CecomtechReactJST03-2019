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
            const {url,responseData,model,modificationType} = action        
            return {
                url,responseData,model,modificationType
            }
        }
        case ACTION_FETCH_FAILED: {
            const {error,url,model,modificationType} = action        
            return {error,url,model,modificationType}
        }
        default:
            return state
    }
}
export default productsReducer