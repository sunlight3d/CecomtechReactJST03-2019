import React from 'react'
import {Link} from 'react-router-dom'
import 'foundation-sites/dist/css/foundation.min.css'
import { 
    Button, Colors, Sizes, Label, ButtonGroup} from 'react-foundation'
import {withFirebase} from '../Firebase/Firebase'
import {withRouter} from 'react-router'

const Header = (props) => {
    const {firebase, history} = props
    const isSignedIn = firebase.auth.currentUser ? true : false    
    const SignoutButton = () => <Button color={isSignedIn ? Colors.ALERT : Colors.PRIMARY}
            onClick={(event) => {
                if (isSignedIn) {
                    firebase.auth.signOut()
                } else {                    
                    history.push('/login')
                }
                
            }}>
            {isSignedIn ? "Sign out": "Sign in"}
        </Button>

    if (isSignedIn) {
        const {email} = firebase.auth.currentUser
        return (<ButtonGroup>
            <li><Label size={Sizes.SMALL} color={Colors.INFO}>Logged in as {email}</Label></li>
            <li><Link to='/'>List of Posts</Link></li>
            <li><Link to='/register'/></li>
            <li><SignoutButton /></li>
        </ButtonGroup>)
    } else {
        return (<ButtonGroup>
            <li><Link to='/'>List of Posts</Link></li>
            <li><Link to='/login'/></li>        
            <li><Link to='/register'/></li>
            <li><SignoutButton /></li>
        </ButtonGroup>)
    }
}
export default withRouter(withFirebase(Header))
