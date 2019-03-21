import React, {Componen} from 'react'
import {Login} from './Login'
import Foundation, {Link} from 'react-foundation'

export const Header = (props) => {
    return (<ul style={{listStyleType: none}}>
        <Link to="/login">Login</Link>
    </ul>)
}
