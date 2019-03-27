import React, {Component} from 'react'
import {createStore} from 'redux'
//1 store => 1 root reducer => N reducers => N*M actions
import rootReducer from './Reducers'
import {Provider} from 'react-redux'

const store = createStore(rootReducer)
//HOC = Higher-Order Components
export const withProvider = Component => (props) => {
    return <Provider store={store}>
        <Component {...props}/>
    </Provider>
}
