import React from 'react'
import {createStore, applyMiddleware} from 'redux'
//1 store => 1 root reducer => N reducers => N*M actions
import rootReducer from './Reducers'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))
//HOC = Higher-Order Components
export const withProvider = Component => (props) => {
    return <Provider store={store}>
        <Component {...props}/>
    </Provider>
}
