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
        const {dispatch, crudType, productId, history} = this.props
        const {url} = this.props
        const {productName, year, description} = this.state         
        try {
            if(url === URL_INSERT_PRODUCT) {
                let result = await fetch(URL_INSERT_PRODUCT, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({productName, year, description}),
                    
                })
                let responseData = result.json()
                dispatch(fetchSuccess(responseData))
                history.goBack()
            }                     
        } catch(error) {
            this.setState({error})
        }
        
    }
    onChangeText = (event) => {
        event.preventDefault()
        this.setState({[event.target.name]: event.target.value})
    }
    componentDidMount() {
        const {products, productId, crudType} = this.props

        if (crudType === 'update') {
            let foundProduct = products.find(product => product.productId === productId) 
            if(foundProduct) {
                this.setState(foundProduct)
            } else {
                this.setState(INITIAL_STATE)
            }                    
        } else {
            this.setState(INITIAL_STATE)
        }
    }
    componentWillReceiveProps(nextProps) {        
        //
    }
    render() {        
        const {crudType, productId, products} = this.props        
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
                    {crudType === 'insert' ? "Insert" : "Update"}
                </Button>
            </form>
        </div>)
    }
}

const mapStateToProps = state => {
    return {
        crudType: state.crudTypeReducer.crudType,
        productId: state.crudTypeReducer.productId,
        products: state.productsReducer.responseData.products,      
        url: state.productsReducer.url  
    }
}

export default withRouter(withProvider(connect(mapStateToProps)(DetailProduct)))