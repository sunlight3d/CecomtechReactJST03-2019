import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withProvider} from '../store'
import {beginFetch, fetchSuccess, fetchFailed} from '../actions'
import crudTypeReducer from '../Reducers'
import productsReducer from '../Reducers'

import 'foundation-sites/dist/css/foundation.min.css'
import {Callout, Colors, Sizes, Button} from 'react-foundation'
import {withRouter} from 'react-router-dom'
import {URL_INSERT_PRODUCT} from '../api'   

import {    
    beginInsertProduct,
    insertProduct,
    insertProductSuccess,
    insertProductFailed,
    
    beginUpdateProduct,
    updateProduct,
    updateProductSuccess,
    updateProductFailed,

    beginDeleteProduct,
    deleteProduct,
    deleteProductSuccess,
    deleteProductFailed

} from '../actions'

const INITIAL_STATE =  {
    productName:'', year:'', description:'', url:''
}
class DetailProduct extends Component {
    constructor(props) {
        super(props)     
        this.state = INITIAL_STATE
    }
    
    handleInsertUpdate = async (event) => {
        event.preventDefault()
        const {dispatch, history} = this.props
        const {productName, year, description} = this.state        
        const {productId} = this.props.match.params 
        try {
            if(productId === '0') {
                //insert           
                // alert('productName'+productName)
                dispatch(insertProduct({productName, year, description}))                     
            } else {
                //update
                dispatch(updateProduct({productId, productName, year, description}))
            }
            history.goBack()
        } catch(error) {
            this.setState({error})                        
        }
        
    }
    onChangeText = (event) => {
        event.preventDefault()
        this.setState({[event.target.name]: event.target.value})
    }
    componentDidMount() {
        const {products, productId} = this.props
        if(productId === '0') {
            //insert           
            this.setState(INITIAL_STATE)
        } else {
            //update
            let foundProduct = products.find(product => product.productId === productId) 
            if(foundProduct) {
                this.setState(foundProduct)
            } else {
                this.setState(INITIAL_STATE)
            }
        }        
    }
    componentWillReceiveProps(nextProps) {        
        //
    }
    render() {             
        const {productId} = this.props.match.params
        const {productName, year, description} = this.state
    
        return (<div>
            <form>
                <input type='text' name='productName' 
                    onChange={this.onChangeText}
                    size={Sizes.SMALL}
                    value={productName}
                    placeholder="Enter product's name"/>
                <input type='number' name='year'
                    onChange={this.onChangeText} 
                    size={Sizes.SMALL}
                    value={year}
                    placeholder="Enter product's year"/>
                <input type='text' name='description' 
                    size={Sizes.SMALL}
                    onChange={this.onChangeText}                
                    value={description}
                    placeholder="Enter product's description "/>
                <Button onClick={this.handleInsertUpdate} color={Colors.PRIMARY}>
                    {productId === '0' ? "Insert" : "Update"}
                </Button>
            </form>
        </div>)
    }
}

export default withRouter(withProvider(connect()(DetailProduct)))