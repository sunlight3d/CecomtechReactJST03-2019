import React, {Component} from 'react'
import './Login.css'
import 'foundation-sites/dist/css/foundation.min.css'
import Foundation,{Link as FoundationLink, Button, Colors, Sizes, Label} from 'react-foundation'
import {withFirebase} from '../Firebase/Firebase'
import {withRouter} from 'react-router-dom'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            error: null,
        }
    }
    onChangeText = (event) => {
        const key = event.target.name
        const value = event.target.value
        this.setState({key: value})
    }
    onRegister = async (event) => {
        event.preventDefault()
        const {name, email, password} = this.state
        const {firebase, history} = this.props
        const {createUserWithEmailAndPassword} = firebase.auth
        try {
            const authUser = await createUserWithEmailAndPassword(email, password)
            await firebase.getUserRef(authUser.user.uid).set({name, email})
            history.push('/')
        } catch(error) {
            this.setState({error})
        }
    }
    render(){
        const {email, password, retypePassword, error} = this.state
        const isInvalidInput = password !== retypePassword ||
                            password !== '' || email !== ''

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
                <input type="password" placeholder="Enter password"
                onChange={this.onChangeText}
                name="password" />
            </label>
            <label>Retype password<input type="password" placeholder="Retype password"
                onChange={this.onChangeText}
                name="retypePassword" /></label>
            <input id="show-password" type="checkbox" /><label for="show-password">Show password</label>
            <Button isDisabled={isInvalidInput} size={Sizes.SMALL} 
                color={Colors.PRIMARY} 
                onClick={this.onRegister}
                className="button expanded">Register
            </Button>
            {error && <Label color={Colors.ALERT}>{error.message}</Label>}
        </form>)
    }
}