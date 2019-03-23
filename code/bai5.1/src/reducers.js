import { combineReducers } from "redux"
import {ACTION_DECREMENT, ACTION_INCREMENT} from './actionTypes'

const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case ACTION_INCREMENT: {
            return state + action.step
        }
        case ACTION_DECREMENT: {
            return state - action.step
        }
        default:
            return state
    }
}
export const rootReducer = combineReducers({counterReducer})