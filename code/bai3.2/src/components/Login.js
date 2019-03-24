import React, {Component} from 'react'
import './Login.css'
import 'foundation-sites/dist/css/foundation.min.css'
import {
    Label as FoundationLabel,
    Button, Colors, Sizes} from 'react-foundation'
import {withFirebase } from '../Firebase/Firebase'
import {withRouter} from 'react-router-dom'
import Header from './Header';

const INITIAL_STATE = {
    email: '',
    password:'',
    showPassword: false,
    error: null,
    isSignedIn: false
}
class Login extends Component {    
    constructor(props) {
        super(props)
        this.state = INITIAL_STATE
    }
    onSignin = (event) => {        
        event.preventDefault()
        const {email, password} = this.state
        const {firebase, history} = this.props
        const {signInWithEmailAndPassword} = firebase
        signInWithEmailAndPassword(email, password).then(() => {                
            this.setState({isSignedIn: true})
            history.push('/')
        }).catch(error => {            
            this.setState({error})
        })        
    }
    onSigninFacebook = async (event) => {
        const {auth, facebookAuthProvider} = this.props.firebase
        const {history} = this.props
        try {
            let result = await auth.signInWithPopup(facebookAuthProvider)
            const {accessToken} = result.credential
            const {user} = result
            this.setState({isSignedIn: true})
            history.push('/')
        } catch(error) {
            this.setState({error})
        }
    }
    onSignout = async (event) => {
        const {signOut} = this.props.firebase.auth
        try {
            await signOut()
        } catch(error) {
            this.setState({error})
        }        
    }
    onChangeText = (event) => {        
        this.setState({[event.target.name]: event.target.value})        
    }
    onChangeCheckbox = (event) => {
        this.setState({showPassword: !this.state.showPassword})
    }
    render(){
        const {email, password, showPassword, error, isSignedIn} = this.state
        return (<div>
            <Header />
            <form className="login-form">
                <h4 className="text-center">Login your account</h4>
                <label>Email
                <input type="text"
                        placeholder="Enter email"
                        name="email"
                        onChange={this.onChangeText}
                    />
                </label>
                <label>Password<input type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    name="password"
                    onChange={this.onChangeText}
                />
                    <input id="show-password" type="checkbox"
                        name="showPassword"
                        onChange={this.onChangeCheckbox}
                    />Show password
                </label>
                <Button size={Sizes.SMALL} color={Colors.PRIMARY}
                    onClick={isSignedIn ? this.onSignout : this.onSignin}
                    className="button expanded">{isSignedIn ? "Sign out" : "Sign in"}
                </Button>
                <Button size={Sizes.SMALL} color={Colors.SUCCESS}
                    onClick={isSignedIn ? this.onSignout : this.onSigninFacebook}
                    className="button expanded">{isSignedIn ? "Sign out" : "Sign in with Facebook"}
                </Button>
                {error && <FoundationLabel color={Colors.ALERT}>{error.message}</FoundationLabel>}
            </form>
        </div>)
    }
}
export default withRouter(withFirebase(Login))