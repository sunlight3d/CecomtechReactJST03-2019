import React, { Component } from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

class App extends Component {
  render() {
    return (
      <div>
        <ComponentA color="red" message="This is A"/>
        <ComponentB color="green" message="This is B"/>
        <ComponentC message="This is C"/>
      </div>
    );
  }
}

export default App;
