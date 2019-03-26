import React, {Component} from 'react'
class LoginForm extends Component {
    //Stateful Component
    constructor(props) {
        super(props)
        this.state = {
            email:'',
            password:'',
            counter:0
        }
    }
    componentDidMount() {
        console.log(`${new Date()}componentDid mount`)
        setInterval(() => {
            this.setState({counter: this.state.counter + 1})
        }, 
        1000)
    }
    shouldComponentUpdate(nextProps,nextState) {
        console.log(`${new Date()} shouldComponentUpdate`)
        //Return True => call render()
        //return false
        /*
        if(this.state.dataFromServer !== nextState.dataFromServer) {
            return true
        } else {
            return false
        }
        */
       return true
    }

    onChangeText = (event) => {   
        //event.preventDefault()    
        this.setState({[event.target.name]: event.target.value})
    }
    onLogin = () => {
        //const {email, password } = this.state
        const email = this.refs.email.value
        const password = this.refs.password.value
        alert(`Email = ${email}, password = ${password}`)
    }
    componentWillUnmount() {
        console.log(`component will unmount`)
    }
    
    render() {
        console.log(`${new Date().toLocaleTimeString()}render`)
        const {email, password, counter} = this.state
        const isInvalidData = email === '' || password === ''
        let emailInput = (<input type='email' name="email"
            onChange={this.onChangeText}
            //value={email}
            ref={"email"}
            placeholder="Enter your email" />)
        let passwordInput = (<input type='password' name="password"
            onChange={this.onChangeText}
            ref={"password"}
            //value={password}
            placeholder="Enter your password" />)
        return <div>
            <h1>Enter your email/password</h1>
            <h2>{counter}</h2>
            <form>
                {emailInput}
                <br />
                {passwordInput}
                <br />
                <p>{email}</p><br />
                <p>{password}</p>
                {isInvalidData && <p>Email and password is invalid format</p>}
                <input disabled={isInvalidData}
                    type='submit'
                    value={"Login to your account"}
                    onSubmit={(event) => {
                        // event.preventDefault()
                        this.onLogin()
                    }}
                    // onClick={(event) => {
                    //     // event.preventDefault()
                    //     this.onLogin()
                    // }}
                />

            </form>
        </div>
    }
}
export {
    LoginForm
}