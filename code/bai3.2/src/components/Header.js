import React, {Componen} from 'react'
import {Login} from './Login'
import {Link} from 'react-router-dom'
import 'foundation-sites/dist/css/foundation.min.css'
import Foundation,{Icon, MenuIcon, MenuItem, Link as FoundationLink, 
    Button, Colors, Sizes, Label} from 'react-foundation'
import {SignoutButton} from './SignoutButton'

const Header = () => {
    
}
const HeaderAuth = () => {
    return (<ul style={{listStyleType: none}}>
        <li><Label size={Sizes.SMALL} color={Colors.INFO}>Logged in as {this.props.loggedInUser.name}</Label></li>
        <li><Link to='/'>List of Posts</Link></li>
        <li><Link to='/register'/></li>
        <li><SignoutButton /></li>
    </ul>)
}
const HeaderNoAuth = () => {
    return (<ul style={{listStyleType: none}}>
        <li><Link to='/'>List of Posts</Link></li>
        <li><Link to='/login'/></li>        
        <li><Link to='/register'/></li>
        <li><SignoutButton /></li>
    </ul>)
}
