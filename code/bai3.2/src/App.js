import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import PostsList from './components/PostsList'
import DetailPost from './components/DetailPost'

import 'foundation-sites/dist/css/foundation.min.css'
import Foundation,{Icon, MenuIcon, MenuItem, Link, Button, Colors, Sizes} from 'react-foundation'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

 
class App extends Component {
  render() {
    return <div className="container">
    
      <Router>
        <Switch>
          <Route exact path="/" component={PostsList}/>
          <Route path="/detailPost/:id" component={DetailPost}/>
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  }
}

export default App;
