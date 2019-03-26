import React, {Component} from 'react'
import Product from './Product'
export default class ProductsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [{
                productId: '2222',
                productName: 'ip 3333',
                year: 2011,
                description: 'up[jkdsjofdsf'
            },{
                productId: '44555',
                productName: 'ip 7777',
                year: 2011,
                description: 'up[77'
            },{
                productId: '565555',
                productName: 'ip 888',
                year: 2011,
                description: 'up[5555'
            }],
            selectedProduct: null
        }
    }
    mapProductObjectsToList = (products) => {

        return products.map((product, index) => {
            let content = `${product.productId}-${product.productName} 
                        - ${product.year}-${product.description}`
            return (
            <li key={product.productId}>
                <h3>{content}</h3>
                <button onClick={(event)=> {
                    this.setState({
                        selectedProduct: product
                    })
                }}>Update this product</button>
            </li>)
        })
    }
    insertProduct = (productName,year, description) => {
        // this.state.products.push({}) //never, because mutating "state"
        /*
        this.setState((prevState) => {
            let productId = Math.floor(Date.now())
            return {products: prevState.products.concat({
                productId, productName, year,description
            })}
        })
        */
        const {products } = this.state
        this.setState({
            products: products.concat({
                productId: Math.floor(Date.now()), 
                productName, year,description
            })
        })
        //alert(JSON.stringify(this.state.products))
    }
    updateProduct = (productId, productName,year, description) => {
     
        const {products } = this.state
        let updatedProducts = products.map(product => {
            if(product.productId === productId) {
                return {
                    ...product,
                    productId, productName,year, description
                }
            }
            return product
        })

        this.setState({
            products: updatedProducts
        })
        //alert(JSON.stringify(this.state.products))
    }
    render() {
        const {products} = this.state
        return (<div>
            <ul>
            {this.mapProductObjectsToList(products)}
            </ul>
            <Product 
                insertProduct = {this.insertProduct}
                updateProduct={this.updateProduct}
                selectedProduct={this.state.selectedProduct}
                />
        </div>)
    }
}