import React, {Component} from 'react'
import Header from './Header'
import {withRouter} from 'react-router-dom'

class DetailProduct extends Component {
    render() {
        alert(Object.keys(this.props).join(', '))
        const {history} = this.props
        const {productId} = this.props.match.params
        
        const info = `productId  = ${productId}`
        
        return(<div>
            <Header />
            <h1>{info}</h1>
        </div>)
    }

}
// export default DetailProduct
export default withRouter(DetailProduct)