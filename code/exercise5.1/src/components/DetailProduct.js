import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withProvider} from '../store'
import {insertProduct, updateProduct} from '../actions'
import crudTypeReducer from '../Reducers'
import productsReducer from '../Reducers'
const INITIAL_STATE =  {
    productName:'', year:'', description:''
}
class DetailProduct extends Component {
    constructor(props) {
        super(props)     
        this.state = INITIAL_STATE
    }
    
    handleInsertUpdate = (event) => {
        event.preventDefault()
        const {dispatch, crudType, productId} = this.props
        const {productName, year, description} = this.state         
        if(crudType === 'insert') {
            dispatch(insertProduct({productName, year, description}))
        } else if(crudType === 'update') {
            dispatch(updateProduct({productId,productName, year, description}))
        }
    }
    onChangeText = (event) => {
        event.preventDefault()
        this.setState({[event.target.name]: event.target.value})
    }
    componentDidMount() {
        
    }
    componentWillReceiveProps(nextProps) {

        const {products, productId, crudType} = nextProps
        
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
        //
    }
    render() {        
        const {crudType, productId, products} = this.props        
        const {productName, year, description} = this.state
    
        return (<div>
            <form>
                <input type='text' name='productName' 
                    onChange={this.onChangeText}
                    
                    value={productName}
                    placeholder="Enter product's name"/>
                <input type='number' name='year'
                    onChange={this.onChangeText} 
                    
                    value={year}
                    placeholder="Enter product's year"/>
                <input type='text' name='description' 
                    
                    onChange={this.onChangeText}                
                    value={description}
                    placeholder="Enter product's description "/>
                <button onClick={this.handleInsertUpdate}>
                    {crudType === 'insert' ? "Insert" : "Update"}
                </button>
            </form>
        </div>)
    }
}

const mapStateToProps = state => {
    return {
        crudType: state.crudTypeReducer.crudType,
        productId: state.crudTypeReducer.productId,
        products: state.productsReducer,        
    }
}

export default withProvider(connect(mapStateToProps)(DetailProduct))