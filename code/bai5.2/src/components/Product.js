import React, {Component} from 'react'
import {connect} from 'react-redux'
import {insertProduct, updateProduct, deleteProduct} from '../actions'

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productName: '',
            year: 1900,
            description: ''
        }        
    }
    onChangeText = (event) => {
        this.setState({[event.targer.name]: event.target.value})
    }
    submitForm = () => {
        
    }
    render() {
        const {modificationType} = this.state //update / insert
        const {dispatch} = this.props
        return (<div>
            <h2>Simple CRUD with Redux</h2>
            <form>
                <input type="text" name="productName" 
                    placeholder="Enter product's name" 
                    onChange={this.onChangeText}
                    />
                <input type="year" name="year" placeholder="Enter production's year"
                    onChange={this.onChangeText}/>
                <input type="description" name="description" 
                    onChange={this.onChangeText}
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
        modificationType: state.modificationTypeReducer
    }
}
export default connect(mapStateToProps)(Product)