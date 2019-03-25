import React, {Component} from 'react'
//Component which has not props => "stateless Component"
/*
export default class Header extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }
    render() {
        const {userName} = this.props
        return <div>
            <h1>Hello {userName}</h1>
        </div>
    }
}
*/
const Header = (props) => {
    //Stateless Component
    return <div><h1>Hello mr {props.userName}</h1></div>
}
export default Header