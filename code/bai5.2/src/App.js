import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/**
 * npm install redux react-redux react-foundation foundation-sites
 */
import Product from './components/Product'
import ProductsList from './components/ProductsList'
class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductsList />
        <Product />
      </div>
    );
  }
}

export default App;
