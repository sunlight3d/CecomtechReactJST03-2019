import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

export const Header = (props) => {
    return <div>
        <li><Link  to="/home">Home</Link ></li>
        <li><Link to="/user">User</Link></li>
    </div>
}