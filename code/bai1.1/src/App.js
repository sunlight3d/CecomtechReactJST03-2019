import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import {doSomething, multiply, testLocalStorage, doPromiseA} from './Utility'

class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        //doSomething()
        /*
        doPromiseA(1,2).then((result) =>{
            alert(`result = ${result}`)
        }).catch((err) => {
            alert(`Error = ${err}`)
        })
        */
        testLocalStorage()
        // multiply(3,10)
        return <div>
            <h1>Hello world</h1>
        </div>
    }
}
export default App