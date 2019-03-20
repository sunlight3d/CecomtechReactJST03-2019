import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'

export const Header = (props) => {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-3">
                        <li className="nav-item active"><Link to="/home" activeStyle={{color: 'red'}}>Home</Link></li>
                        <li className="nav-item"><Link to="/user" activeClassName="active">User</Link></li>
                    </ul>
                </div>
            </div>
    </nav>
}