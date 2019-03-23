import React, {Component} from 'react';
import 'foundation-sites/dist/css/foundation.min.css'
import Foundation,{Icon, MenuIcon, MenuItem, Link, Button, Colors, Sizes} from 'react-foundation'
import {withRouter} from 'react-router-dom'
import {withFirebase} from '../Firebase/Firebase'
import Header from './Header'

class DetailPost extends Component {
    constructor(props) {
        super(props)
        this.state = { post: null, error:null }
    }

    insertOrUpdatePost = async () => {
        const {postId} = this.props.match.params
        const {addNewPost, updatePost} = this.props.firebase        
        const {title='', content=''} = this.state.post
        let userId = this.props.firebase.auth.currentUser.uid
        const {history} = this.props
        if (title == '' || content == '') {
            alert(`Please input your detail's post`)
            return
        }
        try {
            postId == '0' ? await addNewPost(title, content, userId) : updatePost(postId, title, content, userId)
            this.setState({post: {postId, title, content, userId}})
            history.goBack()
        } catch(error) {
            this.setState({error})
        }        
    }
    componentDidMount() {
        const {db} = this.props.firebase
        const {postId} = this.props.match.params        
        db.ref().child(`/posts/${postId}`).on(snapshot => {
            this.setState({post: snapshot.val()})
        })
    }
    render() {
        const {postId} = this.props.match.params
        return (<div>
            <Header />
            <form>
                <table>
                    <tr>
                        <td>Post's title</td>
                        <td><input type="text" placeholder="Enter your post's title" /></td>
                    </tr>
                    <tr>
                        <td>Your post's content</td>
                        <td><textarea rows="4" cols="50" placeholder="Enter your content here" /></td>
                    </tr>
                </table>
                <Button color={Colors.PRIMARY}
                    onClick={(event) => this.insertOrUpdatePost}
                >{postId == '0' ? "Add Post" : "Save your Post"}</Button>
            </form>
        </div>)
    }
}
export default withRouter(withFirebase(DetailPost))