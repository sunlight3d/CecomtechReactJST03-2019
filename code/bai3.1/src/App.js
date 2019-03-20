import React, { Component } from 'react';
import Root from './components/Root'
import Home from './components/Home'
import User from './components/User'
import {NotFound} from './components/NotFound'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import './App.css';
/**
 * npm install react-router
 * npm install react-router-dom
 * npm install bootstrap
 * 
 */
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Root} />
          <Route path="/home" component={Home} />
          <Route path="/user" component={User} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
