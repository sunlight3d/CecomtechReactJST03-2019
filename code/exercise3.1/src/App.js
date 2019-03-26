import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/**
 * Example of HOC = Higher order Component
 */
import ComponentA1 from './ComponentA'
class App extends Component {
  render() {
    return (
      <div className="App">
        <ComponentA1 />
      </div>
    );
  }
}

export default App;
