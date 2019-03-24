import React from 'react'
import {Link} from 'react-router-dom'
import 'foundation-sites/dist/css/foundation.min.css'
import { 
    Menu,MenuItem,
    Button, Colors, Sizes, Label, Alignments} from 'react-foundation'
import {withFirebase} from '../Firebase/Firebase'
import {withRouter} from 'react-router'

const Header = (props) => {
    const {firebase, history} = props
    const isSignedIn = firebase.auth.currentUser ? true : false        
    const {signOut} = props.firebase
    if (isSignedIn) {
        const {email} = firebase.auth.currentUser
        return (<Menu>
            <MenuItem><Link to='/'>List of Posts</Link></MenuItem>
            <MenuItem><p>Logged in as {email}</p></MenuItem>                        
            <MenuItem><Link to='/register'>Register</Link></MenuItem> 
            <MenuItem><Button color={Colors.ALERT}
                onClick={(event) => {
                    signOut()
                    history.push('/')
                }}
            >Sign out</Button></MenuItem> 
        </Menu>)
    } else {
        return (<Menu>
            <MenuItem><Link to='/'>List of Posts</Link></MenuItem>
            <MenuItem><Link to='/login'>Login</Link></MenuItem>        
            <MenuItem><Link to='/register'>Register</Link></MenuItem>            
        </Menu>)
    }
}
export default withRouter(withFirebase(Header))
