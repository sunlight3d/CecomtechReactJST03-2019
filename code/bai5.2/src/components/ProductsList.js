import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withProvider} from '../store'
import {insertProduct, updateProduct, deleteProduct} from '../actions'

class ProductsList extends Component {
    constructor(props) {
        super(props)
    }
    mapProductsToListItem = (products =[]) => {
        return products.map(product => {
            let info = `${product.productId}-${product.productName}-${product.year}-`
            return (<li key={product.productId} >
                {info}
                <button onClick={(event) => {this.handleDelete(product.productId)}}>Delete</button>
                <button onClick={(event) => {this.handleEdit({})}}>Edit</button>

            </li>)
        })
    }
    handleDelete = (productId) => {
        this.props.dispatch(deleteProduct())
    }
    handleEdit = (event) => {

    }
    render() {
        return (<div>
            {this.mapProductsToListItem(this.props.products)}
            
        </div>)
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.productReducer
    }
}

export default withProvider(connect(mapStateToProps)(ProductsList))
