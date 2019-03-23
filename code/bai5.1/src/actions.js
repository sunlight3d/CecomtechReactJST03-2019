import {ACTION_INCREMENT, ACTION_DECREMENT} from './actionTypes'
const increase = (step) => {
    return {
        type: ACTION_INCREMENT,
        step
    }
} 
const decrease = (step) => {
    return {
        type: ACTION_DECREMENT,
        step
    }
} 
export {
    increase, decrease
}