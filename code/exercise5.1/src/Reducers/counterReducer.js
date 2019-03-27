import {increase, decrease} from '../actions'
import {ACTION_INCREASE, ACTION_DECREASE} from '../actionTypes'

//1 model = 1 reducer = 1 "function" = "set state"
const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case ACTION_INCREASE: {
            return state + action.step
        }
        case ACTION_DECREASE: {
            return state - action.step
        }
        default:
            return state
    }
}
export default counterReducer