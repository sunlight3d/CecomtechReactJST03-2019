import React, {Component} from 'react'
import './Login.css'
import 'foundation-sites/dist/css/foundation.min.css'
import {Button, Colors, Sizes, Label as FoundationLabel} from 'react-foundation'
import {withFirebase} from '../Firebase/Firebase'
import {withRouter} from 'react-router-dom'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            error: null,
            showPassword: false
        }
    }
    onChangeText = (event) => {                
        this.setState({[event.target.name]: event.target.value})
    }
    onRegister = (event) => {
        event.preventDefault()
        const {name, email, password} = this.state
        const {firebase, history} = this.props
        const {createUserWithEmailAndPassword} = firebase
        createUserWithEmailAndPassword(email, password).then((authUser) => {    
            alert('aa')        
            this.setState({isSignedIn: true})
            history.push('/')
        }).catch(error => {
            alert('bb')        
            this.setState({error})
        })                
    }
    onChangeCheckbox = (event) => {
        this.setState({showPassword: !this.state.showPassword})
    }

    render(){
        const {name, email, password, retypePassword, error, showPassword} = this.state
        const isInvalidInput = name === '' || password !== retypePassword ||
                            password === '' || email === ''

        return (<form className="login-form" onSubmit={this.onSubmit}>
            <h4 className="text-center">Register your account</h4>
            <label>Name
                <input type="text" placeholder="Enter your name"
                onChange={this.onChangeText}
                name="name" />
            </label>
            <label>Email
                <input type="text" placeholder="Enter email"
                onChange={this.onChangeText}
                name="email" />
            </label>
            <label>Password
                <input placeholder="Enter password"
                type={showPassword ? "text" : "password"}
                onChange={this.onChangeText}
                name="password" />
            </label>
            <label>Retype password<input placeholder="Retype password"
                type={showPassword ? "text" : "password"}
                onChange={this.onChangeText}
                name="retypePassword" /></label>
            <input id="show-password" type="checkbox" 
                onChange={this.onChangeCheckbox}/>
            <label>Show password</label>
            <Button isDisabled={isInvalidInput} size={Sizes.SMALL} 
                color={Colors.PRIMARY} 
                onClick={this.onRegister}
                className="button expanded">Register
            </Button>
            {error && <FoundationLabel color={Colors.ALERT}>{error.message}</FoundationLabel>}
        </form>)
    }
}
export default withRouter(withFirebase(Register))