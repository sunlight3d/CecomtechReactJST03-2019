import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import PostsList from './components/PostsList'
import 'foundation-sites/dist/css/foundation.min.css'
import Foundation,{Icon, MenuIcon, MenuItem, Link, Button, Colors, Sizes} from 'react-foundation'
 
class App extends Component {
  render() {
    return <div>
      {/* <Login /> */}
      <PostsList />
    </div>
  }
}

export default App;
