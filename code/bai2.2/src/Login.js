import React, {Component} from 'react';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {email: '', password: ''}
    }
    render(){
        let Table = <table>
            <tr>
                <td>Email</td>
                <input type="text" 
                    value={this.state.email} 
                    onChange={(event) => {
                        this.setState({email: event.target.value})
                    }}
                    placeholder="Enter your email"/>
           </tr>
           <tr>
                <td>Password</td>
                <input type="password" 
                    value={this.state.password} 
                    onChange={(event) => {
                        this.setState({password: event.target.value})
                    }}
                    placeholder="Enter your password"/>
           </tr>
        </table>
        return <div>
            <Table />
            
        </div>
    }
}
export default Login