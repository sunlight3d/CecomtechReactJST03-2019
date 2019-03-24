import React, {Component} from 'react'
import 'foundation-sites/dist/css/foundation.min.css'
import {Button, Colors} from 'react-foundation'
import {withRouter} from 'react-router-dom'
import {withFirebase} from '../Firebase/Firebase'
import Header from './Header'

class DetailPost extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            title: '',
            content: '', 
            postId: '',
            userId: '',
            error:null 
        }
    }

    insertOrUpdatePost = async () => {
        const {firebase} = this.props
        if(!firebase.auth.currentUser) {
            alert('You must login before adding new Post')
            return
        }                
        const {postId} = this.props.match.params
        // alert(`postId = ${postId}`)
        const {addNewPost, updatePost} = firebase        
        
        const {uid=''} = firebase.auth.currentUser        
        const {history} = this.props
        const {title='', content=''} = this.state        
        if (title === '' || content === '') {
            alert(`Please input your detail's post`)
            return
        }        
        try {            
            if(postId === '0') {
                alert('1')
                await addNewPost(title, content, uid)
            } else {
                alert('2')
                await updatePost(postId, title, content, uid)
            }           
            alert('3') 
            this.setState({postId, title, content, userId: uid})
            alert('aa11')
            history.goBack()            
        } catch(error) {
            alert('bb')
            this.setState({error})
        }        
    }
    onChangeText = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    componentDidMount() {
        const {db} = this.props.firebase
        const {postId} = this.props.match.params        
        db.ref().child(`posts/${postId}`).on('value', snapshot => {
            let {title='', content ='', postId='', userId=''} = snapshot.val()
            this.setState({title, content, postId, userId})
        })
    }
    render() {
        const {postId} = this.props.match.params
        const {title, content} = this.state
        return (<div>
            <Header />
            <h3>Enter your post detail</h3>
            <form>
                <label>
                    <input type="text" 
                        name='title'
                        onChange={this.onChangeText}
                        value={title}
                        placeholder="Enter your post's title" />
                </label>
                <label>
                    <textarea rows="4" cols="50" 
                        name='content'
                        onChange={this.onChangeText}
                        value={content}
                        placeholder="Enter your content here" />
                </label>                
                <Button color={Colors.PRIMARY}
                    onClick={(event) => this.insertOrUpdatePost()}
                >{postId === '0' ? "Add Post" : "Save your Post"}</Button>
            </form>
        </div>)
    }
}
export default withRouter(withFirebase(DetailPost))