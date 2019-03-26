import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/**
 * npm install react-router react-router-dom
 * 
 */
import ProductsList from './components/ProductsList'
import DetailProduct from './components/DetailProduct'
import NotFoundComponent from './components/NotFoundComponent'

import {BrowserRouter as Router, 
  Route, //Mapping between URL path and Component
  Link, Switch} from 'react-router-dom'
import Login from './components/Login'
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={ProductsList} />
          <Route path='/detailProduct/:productId' component={DetailProduct} />
          <Route path='/login' component={Login} />
          <Route component={NotFoundComponent} />
        </Switch>
      </Router>
    )
  }
}

export default App;
