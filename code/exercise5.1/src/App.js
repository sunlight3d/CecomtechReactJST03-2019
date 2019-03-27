import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter";
import ProductsList from "./components/ProductsList";
import DetailProduct from "./components/DetailProduct";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <ProductsList />
        <DetailProduct />
      </div>
    );
  }
}

export default App;
