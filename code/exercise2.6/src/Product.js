import React, {Component} from 'react'
export default class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productName: '',
            year:'',
            description: '',
            type: 'insert'
        }
    }
    componentWillReceiveProps(nextProps) {
        const {selectedProduct = null}= nextProps
        alert(`selectedProduct = ${JSON.stringify(selectedProduct)}`)
        if(selectedProduct) {
            this.setState({
                ...selectedProduct,
                type: "update"
            })    
        } 
    }
    onChangeText = (event) =>{
        this.setState({[event.target.name]: event.target.value})
    }
    handleInsertUpdate = (event) => {
        event.preventDefault()
        const {productId='', productName='',year, description=''} = this.state
        if(this.state.type === "insert") {
            this.props.insertProduct(productName,year, description)
            
        } else {
            this.props.updateProduct(productId, productName,year, description)
        }
        this.setState({type: 'insert'})
    }
    render() {
        const {productName='',year, description=''} = this.state
       
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
                <button onClick={this.handleInsertUpdate} >
                    {this.state.type === "insert"?"Insert": "Update"}
                </button>
            </form>

        </div>)
    }
}