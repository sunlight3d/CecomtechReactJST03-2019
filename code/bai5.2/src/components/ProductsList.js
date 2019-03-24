import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withProvider} from '../store'
import {insertProduct, updateProduct, deleteProduct, changeModificationType} from '../actions'

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
                <button onClick={(event) => {this.handleEdit(product.productId)}}>Edit</button>
            </li>)
        })
    }
    handleDelete = (productId) => {
        if(confirm("Are you sure you want to delete this ?")) {
            this.props.dispatch(deleteProduct(productId))
        } 
    }
    handleEdit = (event) => {
        this.props.dispatch(changeModificationType('update', productId))
    }
    
    render() {
        const {dispatch} = this.props
        return (<div>
            {this.mapProductsToListItem(this.props.products)}
            <button onClick={(event) => {
                dispatch(changeModificationType('insert', ''))
            }}></button>
        </div>)
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.productReducer
    }
}

export default withProvider(connect(mapStateToProps)(ProductsList))
