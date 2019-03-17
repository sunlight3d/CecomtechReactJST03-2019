import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {products: []}
  }
  componentDidMount() {
    this.ref.myForm.focus()
  }
  submitForm = (event) => {
    event.preventDefault()
    let productName = this.refs.productName.value
    let year = this.refs.year.value
    let description = this.refs.description.value
    let newProduct = {productName, year, description}
    let products = this.state.products
    products.push(newProduct)
    this.setState({products})
    this.ref.myForm.reset()
    this.ref.myForm.focus()    
  }
  handleDelete = (productName) => {
    const updatedProducts = this.state.products.filter(product => {
      return product.productName !== productName
    })
    this.setState({
      products: updatedProducts
    })
  }
  mapProductsToListItem = (products) => {
    products.map((product, index) => {
      <li key={index} className="myList">
        {index+1}.{product.productName}, {product.year}, {product.description}
        <button onClick={this.handleDelete} className="myButton">Delete</button>
        <button onClick={this.handleEdit} className="myButton">Edit</button>
      </li>
    })
  }
  render() {
    return (
      <div className="App">
        <h2>Simple CRUD without Database</h2>
        <form ref="myForm" className="myform">
          <input type="text" placeholder="Enter product's name" className="formField" ref="productName"/>
          <input type="number" placeholder="Year" className="formField" ref="year"/>
          <input type="text" placeholder="Description" className="formField" ref="description"/>
          <button onClick={this.submitForm}>Submit</button>
        </form>
        <pre>

        </pre>
      </div>
    );
  }
}

export default App;
