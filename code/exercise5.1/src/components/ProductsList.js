import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withProvider} from '../store'
import {changeCrudType} from '../actions'

class ProductsList extends Component {
    constructor(props) {
        super(props)
        
    }
    mapProductObjectsToList = (products) => {
        return products.map((product, index) => {
            let content = `${product.productId}-${product.productName} 
                        - ${product.year}-${product.description}`
            return (
            <li key={product.productId}>
                <h3>{content}</h3>
                <button onClick={(event)=> {
                    this.props.dispatch(changeCrudType("update", product.productId))
                }}>Update this product</button>
            </li>)
        })
    }
    
    render() {
        const {products} = this.props
        return (<div>
            <ul>
            {this.mapProductObjectsToList(products)}
            </ul>            
        </div>)
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.productsReducer
    }
}
export default withProvider(connect(mapStateToProps)(ProductsList))