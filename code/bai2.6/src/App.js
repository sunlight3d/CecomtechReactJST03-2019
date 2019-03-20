import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {products: [], type: "insert"}
    this.selectedIndex = -1
  }
  componentDidMount() {
    this.refs.myForm.focus()
  }
  submitForm = (event) => {
    event.preventDefault()    
    let products = this.state.products
    if (this.state.type === "insert") {
      let productName = this.refs.productName.value
      let year = this.refs.year.value
      let description = this.refs.description.value
      let newProduct = { productName, year, description }
      let updatedProducts = products.concat(newProduct)
      this.setState({ products: updatedProducts })      
    } else if(this.state.type ==="update") {
      const selectedIndex = this.selectedIndex
      let updatedProducts = products.map((product, index) => {
        if (index === selectedIndex) {
          return {
            ...product,
            productName: this.refs.productName.value,
            year: this.refs.year.value,
            description: this.refs.description.value
          }
        }
        return product
      })
      this.setState({
        products: updatedProducts,
        type: "insert"
      })   
    }
    this.refs.myForm.reset()
    this.refs.myForm.focus()
  }
  handleDelete = (index) => {
    let products = this.state.products
    let updatedProducts = products.filter((product, i) => {
      return i !== index
    })   
    this.setState({
      products: updatedProducts
    })
  }
  handleEdit = (index) => {
    let selectedProduct = this.state.products[index]
    this.refs.productName.value = selectedProduct.productName
    this.refs.year.value = selectedProduct.year
    this.refs.description.value = selectedProduct.description    
    this.setState({
      type: "update"
    })
    this.selectedIndex = index
  }
  mapProductsToListItem = (products = []) => {    
    return products.map((product, index) => 
      <li key={index} className="myList">
        {index+1}.{product.productName}, {product.year}, {product.description}
        <button onClick={(event)=>this.handleDelete(index)} className="myListButton">Delete</button>
        <button onClick={()=>this.handleEdit(index)} className="myListButton">Edit</button>
      </li>)
  }
  render() {
    return (
      <div className="App">
        <h2>Simple CRUD without Database</h2>
        <form ref="myForm" className="myForm">
          <input type="text" placeholder="Enter product's name" className="formField" ref="productName"/>
          <input type="number" placeholder="Year" className="formField" ref="year"/>
          <input type="text" placeholder="Description" className="formField" ref="description"/>
          <button onClick={this.submitForm} className="myButton">{this.state.type==="insert" ? "Add":"Save"}</button>
        </form>
        <pre>
          {this.mapProductsToListItem(this.state.products)}
        </pre>
      </div>
    );
  }
}

export default App;
