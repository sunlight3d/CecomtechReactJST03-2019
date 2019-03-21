import React, {Component} from 'react'
import 'foundation-sites/dist/css/foundation.min.css'
import Foundation,{Icon, MenuIcon, MenuItem, Link, Button, Colors, Sizes, Callout} from 'react-foundation'
import './PostsList.css'

export default class PostsList extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return <div className="container">
            <h2>This is your Posts</h2>
            <Callout color={Colors.SECONDARY}>
                <h5>This is title</h5>
                <p>Content</p>
                <a>Click here to Edit.</a>
                <div><Button color={Colors.ALERT}>Delete this Post</Button></div>
            </Callout>
        </div>
    }
}