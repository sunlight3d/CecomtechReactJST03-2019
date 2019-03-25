import React, {Component} from 'react'
export default class Header extends Component {
    //Stateful Component
    constructor(props) {
        super(props)
        this.state = {
            email:'',
            password:''
        }
    }
    componentDidMount() {

    }
    render() {
        const {email, password} = this.state
        return <div>
            <h1>Enter your email/password</h1>
            <input type='email' name="email" 
                onChange={(event) => {
                    this.setState({email: event.target.value})
                }}
                value={email}
                placeholder="Enter your email" />
            <br/>
            <input type='password' name="password" 
                onChange={(event) => {
                    this.setState({password: event.target.value})
                }}
                value={password}
                placeholder="Enter your password" />
            <br/>
            <p>{email}</p><br/>
            <p>{password}</p>
            <button>Login to your account</button>
        </div>
    }
}