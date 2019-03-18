import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {products: []}
  }
  componentDidMount() {
    this.refs.myForm.focus()
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
    this.refs.myForm.reset()
    this.refs.myForm.focus()    
  }
  handleDelete = (index) => {
    let products = this.state.products
    products.slice(index, 1)    
    this.setState({
      products: updatedProducts
    })
  }
  handleEdit = (index) => {
    let selectedProduct = this.state.products[index]
    this.refs.productName = selectedProduct.productName
    this.refs.year = selectedProduct.year
    this.refs.description = selectedProduct.description    
    this.setState({
      products: updatedProducts
    })
  }
  mapProductsToListItem = (products = []) => {    
    return products.map((product, index) => 
      <li key={index} className="myList">
        {index+1}.{product.productName}, {product.year}, {product.description}
        <button onClick={()=>this.handleDelete(product.productName)} className="myButton">Delete</button>
        <button onClick={()=>this.handleEdit(product.productName)} className="myButton">Edit</button>
      </li>)
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
          {this.mapProductsToListItem(this.state.products)}
        </pre>
      </div>
    );
  }
}

export default App;
