import React, {Component} from 'react'
import {connect} from 'react-redux'
import {insertProduct, updateProduct, deleteProduct} from '../actions'
import {withProvider} from '../store'
class Product extends Component {
    constructor(props) {
        super(props)
        //For data binding only
        this.state = {
            productName: '',
            year: '',
            description: ''
        }        
    }
    onChangeText = (event) => {
        this.setState({[event.targer.name]: event.target.value})
    }
    submitForm = (event) => {
        const {modificationType,productId, dispatch} = this.props
        const {productName, year, description} = this.state
        if(modificationType === "insert") {
            dispatch(insertProduct({productName, year, description}))
        } else if(modificationType === 'update') {
            dispatch(updateProduct(productId))
        }
    }
    reloadData() {
        const {modificationType, productId} = this.props
        if(modificationType === 'insert') {
            this.setState({productName: '', year:'', description:''})
        } else if (modificationType === 'update') {
            const {products} = this.props
            const foundProduct = products.find(product => product.productId === productId)
            if(foundProduct) {
                this.setState(foundProduct)
            }            
        }
    }
    render() {        
        reloadData()
        const {productName, year, description} = this.state
        const {modificationType} = this.props

        return (<div>
            <h2>Simple CRUD with Redux</h2>
            <form>
                <input type="text" name="productName" 
                    placeholder="Enter product's name" 
                    value={productName}
                    onChange={this.onChangeText}
                    />
                <input type="year" name="year" placeholder="Enter production's year"
                    value={year}
                    onChange={this.onChangeText}/>
                <input type="description" name="description" 
                    onChange={this.onChangeText}
                    value={description}
                    placeholder="Enter product's description"/>
            </form>
            <button onClick={this.submitForm}>
                {modificationType === "insert" ? "Add": "Save"}
            </button>
        </div>)
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.productReducer,
        modificationType: state.modificationTypeReducer.modificationType,
        productId: state.modificationTypeReducer.productId
    }
}
export default withProvider(connect(mapStateToProps)(Product)) 