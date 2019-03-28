import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter";
import ProductsList from "./components/ProductsList";
import DetailProduct from "./components/DetailProduct";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
/**
 * npm i redux react-redux react-foundation foundation-sites react-router react-router-dom
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>                      
            <Route exact path='/' component={ProductsList}/>
            <Route exact path='/counter' component={Counter}/>
            <Route exact path='/detailProduct/:productId' component={DetailProduct}/>
          </Switch>
        </Router>
              
      </div>
    );
  }
}

export default App;
