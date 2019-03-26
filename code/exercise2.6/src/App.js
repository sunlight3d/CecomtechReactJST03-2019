import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductsList from './ProductsList'
class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductsList /> 
      </div>
    );
  }
}

export default App;
