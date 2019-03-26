import React, {Component} from 'react'
import Header from './Header'
import {withRouter} from 'react-router-dom'
import {withFirebase} from '../Firebase'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayName:'', 
            uid:'', 
            email:'', 
            error: null
        }
    }
    onClickSignIn = (event) => {
        event.preventDefault()
        const email = this.refs.email.value
        const password = this.refs.password.value
        this.props.firebase.auth.signInWithEmailAndPassword(email, password)
            .then(user => {
                const { displayName, uid, email } = user
                this.setState({ displayName, uid, email, error: null })
            }).catch(error => {
                this.setState({ error })
            })
    }
    componentDidMount() {
        this.props.firebase.auth.onAuthStateChanged(user => {
            if(user) {
                const { displayName, uid, email } = user
                this.setState({ displayName, uid, email })
            } else {
                //sign out 
                this.setState({ displayName:'', uid:'', email:''})
            }
            
        })
    }
    render() {
        const {history, match, location, firebase} = this.props
        const {displayName, uid, email, error} = this.state
        // firebase.sayHello()
        return(<div>
            <Header />
            <h1>This is Login</h1>
            <form>
                <input type="text" name="email" ref = {"email"}/><br/>
                <input type="password" name="password" ref = {"password"}/><br/>
                <button onClick={this.onClickSignIn}>Login to your account</button>
            </form>
            {error && <p>{error.message}</p>}
        </div>)
    }
}
export default withFirebase(withRouter(Login))

