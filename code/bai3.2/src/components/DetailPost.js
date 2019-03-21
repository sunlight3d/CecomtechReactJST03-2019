import React, {Component} from 'react';
import 'foundation-sites/dist/css/foundation.min.css'
import Foundation,{Icon, MenuIcon, MenuItem, Link, Button, Colors, Sizes} from 'react-foundation'

export default class DetailPost extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    insertOrUpdatePost() {
        
    }
    render() {
        const {type} = this.props
        return <div>
            <form>
            <table>
                <tr>
                    <td>Post's title</td>
                    <td><input type="text" placeholder="Enter your post's title"/></td>
                </tr>
                <tr>
                    <td>Your post's content</td>
                    <td><textarea rows="4" cols="50" placeholder="Enter your content here"/></td>
                </tr>
            </table>
            <Button color={Colors.PRIMARY}
                onClick={(event) => this.insertOrUpdatePost}
                >{type === "insert" ? "Add Post" : "Save your Post"}</Button>
            </form>

        </div>
    }
}