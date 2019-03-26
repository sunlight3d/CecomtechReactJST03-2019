import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
class Header extends Component {
    render() {
        let productId = 4
        const {history} = this.props
        return(<div>
            <h2>This is a Header</h2>
            <Link to={`/detailProduct/${productId}`}>Detail Product</Link>
            <button onClick={(e)=>{
                history.push(`/detailProduct/${productId}`)
            }}>
                Navigate to Detail Product
            </button>
            <Link to='/' >List of Products</Link>
        </div>)
    }
}
export default Header