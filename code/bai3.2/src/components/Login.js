import React, {Component} from 'react'
import './Login.css'
import 'foundation-sites/dist/css/foundation.min.css'
import Foundation,{Icon, MenuIcon, MenuItem, Link, Button, Colors, Sizes} from 'react-foundation'

import {FirebaseContext} from '../Firebase/Firebase'

export default class Login extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return <FirebaseContext.Consumer>
            {
                firebase => {
                    <form className="login-form">
                        <h4 className="text-center">Login your account</h4>
                        <label>Email<input type="text" placeholder="Enter email" /></label>
                        <label>Password<input type="password" placeholder="Enter password" /></label>
                        <input id="show-password" type="checkbox" /><label for="show-password">Show password</label>
                        <Button size={Sizes.SMALL} color={Colors.PRIMARY} className="button expanded">Login</Button>
                    </form>
                }
            } 
        </FirebaseContext.Consumer>
    }
}