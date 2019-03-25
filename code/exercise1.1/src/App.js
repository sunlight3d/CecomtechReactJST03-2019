import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  doSomething,
  sum2Numbers,
  aFunctionCallPromise
} from './utilities/utilities'
//Module = file 
class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    aFunctionCallPromise()
  }
  //ECMAScript 7
  render() {
    doSomething()
    //alert(`Sum 2 numbers is: ${sum2Numbers(2,3)}`)
    const strA = doSomething()
    return (
      <div className="App">
        <h1>{strA}</h1>
      </div>
    );
  }
}

export default App;
