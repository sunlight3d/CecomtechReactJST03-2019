import React, {Component} from 'react'
import {Header} from './Header'
import 'bootstrap/dist/css/bootstrap.css'

export default class Root extends Component {
    render() {
        return <div className="container">                
                <div className="row">
                    <div className="col-xs-10 offset-xs-1">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 offset-xs-1">
                        {this.props.children}
                    </div>
                </div>
        </div>
    }
}