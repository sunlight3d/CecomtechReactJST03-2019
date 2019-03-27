import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withProvider} from '../store'
import {changeCrudType} from '../actions'
import 'foundation-sites/dist/css/foundation.min.css'
import {Callout, Colors, Sizes, Button} from 'react-foundation'
/**
 * npm install react-foundation foundation-sites
 */

class ProductsList extends Component {
    constructor(props) {
        super(props)
        
    }
    mapProductObjectsToList = (products) => {
        return products.map((product, index) => {
            let content = `${product.productId}-${product.productName} 
                        - ${product.year}-${product.description}`
            return (
            <Callout key={product.productId} 
                color={index%2 === 0? Colors.PRIMARY: Colors.SUCCESS}>
                <h3>{content}</h3>
                <Button 
                    isHollow color={Colors.ALERT}
                    onClick={(event)=> {
                    this.props.dispatch(changeCrudType("update", product.productId))
                }}>Update this product</Button>
            </Callout>)
        })
    }
    
    render() {
        const {products} = this.props
        return (<ul>
            {this.mapProductObjectsToList(products)}
            </ul>)
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.productsReducer
    }
}
export default withProvider(connect(mapStateToProps)(ProductsList))