import React, {Componen} from 'react'
import {Login} from './Login'
import {Link} from 'react-router-dom'
import 'foundation-sites/dist/css/foundation.min.css'
import Foundation,{Icon, MenuIcon, MenuItem, Link as FoundationLink, 
    Button, Colors, Sizes, Label} from 'react-foundation'

export const Header = (props) => {
    return (<ul style={{listStyleType: none}}>
        <Link to="/login">Login</Link>
    </ul>)
}
const HeaderAuth = () => {
    return (<ul style={{listStyleType: none}}>
        <li><Label size={Sizes.SMALL} color={Colors.INFO}>Logged in as {this.props.loggedInUser.name}</Label></li>
        <li><Link to='/postsList'/></li>
    </ul>)
}
const HeaderNoAuth = () => {
    return (<ul>
        
    </ul>)
}