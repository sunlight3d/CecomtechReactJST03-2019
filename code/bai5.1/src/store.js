import {createStore} from 'redux'
import {rootReducer} from './reducers'
const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(`Current state: ${store.getState()}`)
})
export default store