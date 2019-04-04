import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withProvider} from '../store'
import 'foundation-sites/dist/css/foundation.min.css'
import {Callout, Colors, Sizes, Button, ButtonGroup} from 'react-foundation'
import {withRouter} from 'react-router-dom'
import Counter from './Counter'
import {fetchFailed} from '../actions'
import './ProductsList.css'

/**
 * npm install react-foundation foundation-sites
 */

class ProductsList extends Component {
    constructor(props) {
        super(props)
        
    }
    mapProductObjectsToList = (products) => {
        const {history, dispatch} = this.props
        return products.map((product, index) => {
            let content = `${product.productId}-${product.productName} 
                        - ${product.year}-${product.description}`            
            return (                
            <Callout key={product.productId} 
                color={index%2 === 0? Colors.PRIMARY: Colors.SUCCESS}>
                <h3>{content}</h3>
                    <ButtonGroup>
                        <Button
                            isHollow color={Colors.PRIMARY}
                            onClick={(event) => {
                                history.push(`/detailProduct/${product.productId}`)                                
                            }}>Update this product
                        </Button>                        
                    </ButtonGroup>                
            </Callout>)
        })
    }
    
    render() {
        const {history, dispatch} = this.props
        const {loading,products = [],error} = this.props
        return (<ul>
            <Counter /> 
            {loading ? <div className="loading" /> : 
                this.mapProductObjectsToList(products)}
                <Button
                    isHollow color={Colors.ALERT}
                    onClick={(event) => {
                        history.push(`/detailProduct/0`)                        
                    }}>Insert new product
                </Button>
            </ul>)
    }
}
const mapStateToProps = (state) => {
    let {products, error, loading} = this.state.productsReducer
    return {products, error, loading}
}
export default withRouter(withProvider(connect(mapStateToProps)(ProductsList))) 