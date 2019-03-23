import React, {Componen} from 'react'
import {Login} from './Login'
import {Link} from 'react-router-dom'
import 'foundation-sites/dist/css/foundation.min.css'
import Foundation,{Icon, MenuIcon, MenuItem, Link as FoundationLink, 
    Button, Colors, Sizes, Label} from 'react-foundation'
import {withFirebase} from '../Firebase/Firebase'
const Header = withFirebase((props) => {
    const {firebase} = props
    const isSignedIn = firebase.auth.currentUser ? true : false
    const {email} = firebase.auth.currentUser
    const SignoutButton = <Button color={isSignedIn ? Colors.ALERT : Colors.PRIMARY}
            onClick={(event) => {
                firebase.auth.signOut()
            }}>
            {isSignedIn ? "Sign out": "Sign in"}
        </Button>
    if (isSignedIn) {
        return (<ul style={{listStyleType: none}}>
            <li><Label size={Sizes.SMALL} color={Colors.INFO}>Logged in as {email}</Label></li>
            <li><Link to='/'>List of Posts</Link></li>
            <li><Link to='/register'/></li>
            <li><SignoutButton /></li>
        </ul>)
    } else {
        return (<ul style={{listStyleType: none}}>
            <li><Link to='/'>List of Posts</Link></li>
            <li><Link to='/login'/></li>        
            <li><Link to='/register'/></li>
            <li><SignoutButton /></li>
        </ul>)
    }
})
export default Header
