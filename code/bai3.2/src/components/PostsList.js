import React, {Component} from 'react'
import 'foundation-sites/dist/css/foundation.min.css'
import Foundation,{ 
    Link as FoundationLink, 
    Button, Colors, Sizes, Callout, Label} from 'react-foundation'
import './PostsList.css'
import Header from './Header';
import {withFirebase} from '../Firebase/Firebase'
import {Link, withRouter} from 'react-router-dom'

class PostsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authUser: null,
            posts: []            
        }
    }
    componentDidMount() {
        const {firebase} = this.props
        this.listener = firebase.onAuthStateChanged(
            authUser => {
                authUser ? this.setState({authUser}):this.setState({authUser: null})
            }
        )
        firebase.ref('posts/').on('value', snapshot => {
            //this.setState({posts: snapshot.val()})
            let posts = snapshot.forEach(childSnapshot => {
                let childKey = childSnapshot.key
                let post = childSnapshot.val()
                return post                
            })
            this.setState({posts})
        })
    }
    componentWillUnmount() {
        
    }
    onAddPost = (event) => {
        const {match, location,history} = this.props
        history.push('/detailPost/0')
    }
    mapPostsToList = (posts=[]) => {
        const {uid='', email=''} = this.state.authUser.user                        
        let callouts = posts.map((post, index) => {
            const userCanEdit = post.userId === uid            
            return (<Callout color={index % 2 === 0 ? Colors.SECONDARY : Colors.WARNING}>
                <Label size={Sizes.SMALL}>{post.title}</Label>
                <Label size={Sizes.SMALL}>{post.content}</Label>                
                {userCanEdit &&<Link to={`/detailPost/${post.postId}`}>Click here to Edit.</Link> }
                {userCanEdit &&<Button color={Colors.ALERT} 
                    onClick={(event) => {
                        if(prompt('Are you you want to delete this ?')){
                            this.onDeletePost(post.postId)
                        } else {

                        }                        
                    }}
                    size={Sizes.SMALL}>
                    Delete this post
                </Button> }
            </Callout>)
        })
        return callouts
    }
    render(){
        const {posts=[]} = this.state
        return <div className="container">
            <Header />
            <h2>This is your Posts</h2>
            {this.mapPostsToList(posts)}
            <Button onClick={this.onAddPost}>

            </Button>
        </div>
    }
}
export default withRouter(withFirebase(PostsList)) 