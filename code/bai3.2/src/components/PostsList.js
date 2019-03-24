import React, {Component} from 'react'
import 'foundation-sites/dist/css/foundation.min.css'
import {     
    Button, 
    ButtonGroup,
    Colors, Sizes, Callout, Label
} from 'react-foundation'
import './PostsList.css'
import Header from './Header';
import {withFirebase} from '../Firebase/Firebase'
import {Link, withRouter} from 'react-router-dom'

class PostsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authUser: {},
            posts: []            
        }
    }
    componentDidMount() {
        const {firebase} = this.props        
        this.listener = firebase.auth.onAuthStateChanged(
            authUser => {                
                authUser ? this.setState({authUser}):this.setState({authUser: null})
            }
        )
        firebase.db.ref('posts').on('value', snapshot => {
            let posts = []
            snapshot.forEach(childSnapshot => {
                // let childKey = childSnapshot.key
                let post = childSnapshot.val()
                posts.push(post)                
            })
            this.setState({posts})
        })
    }
    componentWillUnmount() {
        
    }
    onAddPost = (event) => {
        const {history} = this.props
        history.push('/detailPost/0')
    }
    navigateToEdit = (postId) => {
        this.props.history.push(`/detailPost/${postId}`)
    }
    mapPostsToList = (posts=[]) => {
        //alert(`this.state.authUser = ${this.state.authUser}`)
        const {auth, deletePost} = this.props.firebase        
        const {uid=''} = auth.currentUser || {uid:'', email:''}
        let callouts = posts.map((post, index) => {
            let userCanEdit = post.userId === uid            
            return (<Callout color={index % 2 === 0 ? Colors.SECONDARY : Colors.WARNING}
                    key={post.postId}>
                <p>{post.title}</p>
                <p>{post.content}</p>
                <ButtonGroup>
                    {userCanEdit && <Button 
                        onClick={event => {
                            this.navigateToEdit(post.postId)
                        }}
                        color={Colors.PRIMARY}>Click here to Edit</Button>}
                    {userCanEdit && <Button color={Colors.ALERT}
                        onClick={(event) => {
                            if (window.confirm('Are you you want to delete this ?')===true) {
                                deletePost(post.userId, post.postId)
                            } 
                        }}
                        size={Sizes.SMALL}>
                        Delete this post
                </Button>}
                </ButtonGroup>
                
            </Callout>)
        })
        return callouts
    }
    render(){
        const {posts=[]} = this.state
        return <div className="container">
            <Header />
            <h3>All posts here</h3>
            {this.mapPostsToList(posts)}
            <Button onClick={this.onAddPost}>
                Add new post
            </Button>
        </div>
    }
}
export default withRouter(withFirebase(PostsList)) 