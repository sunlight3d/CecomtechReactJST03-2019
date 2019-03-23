import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'foundation-sites/dist/css/foundation.min.css'
import store from './store'
/**
 * npm i redux react-redux react-foundation foundation-sites
 * 
 */
import Counter from './components/Counter'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;
