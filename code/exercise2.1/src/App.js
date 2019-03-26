import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-app-polyfill/ie9'
import Header from './components/Header'
import {LoginForm} from './components/LoginForm'
class App extends Component {
  
  render() {

    return (
      <div className="App">
        <Header userName="Hoang"/>
        <LoginForm />
      </div>)
  }
}

export default App
