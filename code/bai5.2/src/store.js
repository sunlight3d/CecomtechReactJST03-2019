import React, {Component} from 'react'
import rootReducer from './reducers'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
const store = createStore(rootReducer)
export const withProvider = Component => (props) => {
    return <Provider store={store}>
        <Component {...props}/>
    </Provider>
}
export default store
