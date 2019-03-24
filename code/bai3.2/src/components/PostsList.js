import React, {Component} from 'react'
import 'foundation-sites/dist/css/foundation.min.css'
import {     
    Button, Colors, Sizes, Callout, Label
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
        firebase.db.ref('posts/').on('value', snapshot => {
            //this.setState({posts: snapshot.val()})
            let posts = snapshot.forEach(childSnapshot => {
                // let childKey = childSnapshot.key
                let post = childSnapshot.val()
                return post                
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
    mapPostsToList = (posts=[]) => {
        //alert(`this.state.authUser = ${this.state.authUser}`)
        const {auth} = this.props.firebase        
        const {uid=''} = auth.currentUser || {uid:'', email:''}
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
            <h3>All posts here</h3>
            {this.mapPostsToList(posts)}
            <Button onClick={this.onAddPost}>
                Add new post
            </Button>
        </div>
    }
}
export default withRouter(withFirebase(PostsList)) 