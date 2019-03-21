import React, {Component} from 'react'
import {Header} from './Header'


export default class Root extends Component {
    render() {
        return <div>                
                <Header />
                {this.props.children}
        </div>
    }
}