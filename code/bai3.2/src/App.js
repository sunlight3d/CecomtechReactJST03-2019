import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import PostsList from './components/PostsList'
import DetailPost from './components/DetailPost'

import 'foundation-sites/dist/css/foundation.min.css'

import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={PostsList}/>
          <Route path="/detailPost/:postId" component={DetailPost}/>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register}/>
        </Switch>
      </Router>
    </div>
  }
}

export default App;
