import React, {Component} from 'react'
import './Login.css'
import 'foundation-sites/dist/css/foundation.min.css'
import Foundation,{Icon, MenuIcon, MenuItem, Link, Button, Colors, Sizes, Label} from 'react-foundation'

import {FirebaseContext} from '../Firebase/Firebase'

export default class Register extends Component {
    constructor(props) {
        super(props)
    }
    onChangeText = (event) => {
        const key = event.target.name
        const value = event.target.value
        this.setState({key: value})
    }
    onSubmit = (event) => {
        
    }
    render(){
        const {email, password, retypePassword, error} = this.state
        const isInvalidInput = password !== retypePassword ||
                            password !== '' || email !== ''
                            
        return <FirebaseContext.Consumer>
            {
                firebase => {
                    <form className="login-form" onSubmit={this.onSubmit}>
                        <h4 className="text-center">Login your account</h4>
                        <label>Email<input type="text" placeholder="Enter email"
                            onChange={this.onChangeText}
                            name="name"/></label>
                        <label>Password<input type="password" placeholder="Enter password" 
                            onChange={this.onChangeText}
                            name="password"/></label>
                        <label>Retype password<input type="password" placeholder="Retype password" 
                            onChange={this.onChangeText}
                            name="retypePassword"/></label>
                        <input id="show-password" type="checkbox" /><label for="show-password">Show password</label>
                        <Button isDisabled={isInvalidInput} size={Sizes.SMALL} color={Colors.PRIMARY} className="button expanded">Login</Button>
                        {error && <Label color={Colors.ALERT}></Label>}
                    </form>
                }
            } 
        </FirebaseContext.Consumer>
    }
}