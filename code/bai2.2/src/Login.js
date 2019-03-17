import React, {Component} from 'react';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {email: '', password: ''}
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(`${new Date().toLocaleString()} should component update`)
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(`${new Date().toLocaleString()} getSnapshotBeforeUpdate`)
        return null
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(`${new Date().toLocaleString()} componentDidUpdate`)
    }
    componentDidMount() {
        console.log(`${new Date().toLocaleString()} componentDidMount`)
    }
    componentWillUnmount(){
        console.log(`${new Date().toLocaleString()} componentWillUnmount`)
    }
    handleLogin = (event) => {
        alert(`Email = ${this.state.email}, password = ${this.state.password}`)
    }
    render(){
        console.log(`${new Date().toLocaleString()} Render`)
        return <div>
            <label>Email</label><br />
            <input type="text"
                value={this.state.email}
                onChange={(event) => {
                    this.setState({ email: event.target.value })
                }}
                placeholder="Enter your email" />
            <br />
            <label>Password</label><br />
            <input type="password"
                value={this.state.password}
                onChange={(event) => {
                    this.setState({ password: event.target.value })
                }}
                placeholder="Enter your password" />
            <br />
            <button onClick={this.handleLogin}>Login</button>
        </div>
    }
}
export default Login