import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {counter: 0}
  }  
  componentDidMount = async () => {
    setInterval(() => {
      //setState('param is a function')
      /*
      this.setState((prevState) => {
        return {counter: prevState.counter+1}
      })
      */
      //setState('param is a variable')
      this.setState({counter: this.state.counter+1})
    }, 1000)
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.counter}</h1>
      </div>
    );
  }
}

export default App;
