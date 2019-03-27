import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withProvider} from '../store'
import {changeCrudType} from '../actions'
import 'foundation-sites/dist/css/foundation.min.css'
import {Callout, Colors, Sizes, Button, ButtonGroup} from 'react-foundation'
import {withRouter} from 'react-router-dom'
import Counter from './Counter'

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
                                dispatch(changeCrudType("update", product.productId))
                            }}>Update this product
                        </Button>                        
                    </ButtonGroup>                
            </Callout>)
        })
    }
    
    render() {
        const {products, history, dispatch} = this.props
        return (<ul>
            <Counter /> 
            {this.mapProductObjectsToList(products)}
                <Button
                    isHollow color={Colors.ALERT}
                    onClick={(event) => {
                        history.push(`/detailProduct/0`)
                        dispatch(changeCrudType("insert", "0"))
                    }}>Insert new product
                </Button>
            </ul>)
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.productsReducer
    }
}
export default withRouter(withProvider(connect(mapStateToProps)(ProductsList))) 