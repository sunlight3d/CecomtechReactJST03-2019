import React, {Component} from 'react'
/**
 * npm i firebase
 */
import 'firebase/auth'
import app from 'firebase/app'
const config =  {
    apiKey: "AIzaSyBTb-XtNdRVDX2hLCaBGSVRfiLs8ljfN6Q",
    authDomain: "reacttutorials-43010.firebaseapp.com",
    databaseURL: "https://reacttutorials-43010.firebaseio.com",
    projectId: "reacttutorials-43010",
    storageBucket: "reacttutorials-43010.appspot.com",
    messagingSenderId: "835387535542"
};
const FirebaseContext = React.createContext() 
class Firebase {
    constructor() {
        app.initializeApp(config)
        this.auth = app.auth()
        this.db = app.database()
        this.storage = app.storage()
        this.facebookAuthProvider = new app.auth.FacebookAuthProvider()
        this.facebookAuthProvider.setCustomParameters({display: 'popup'})
    }
    
    getUserRef = userId => {
        return this.db.ref().child(`users/${userId}`)
    }
    getAllUsersRef = () => {
        return this.db.ref().child('users')
    }
    //Posts
    getAllPostsRef = async () => {
        return await this.db.ref('posts')
    }        
    getPostRef = postId => {
        return this.db.ref().child(`users/${postId}`)
    }
    //add new post
    addNewPost = async (title, content, userId) => {
        try {
            const postsRef = await this.db.ref().child('posts')
            const newPostId = await postsRef.push().key
            let updates = {}
            updates[`/posts/${newPostId}`] = { postId: newPostId, title, content, userId }
            //Relation
            updates[`/user-posts/${userId}/${newPostId}`] = { postId: newPostId, title, content,userId }
            await this.db.ref().update(updates)
        }catch(error) {
            throw error
        }
    }    
    updatePost = async (postId, title, content, userId) => {
        try {                        
            updates[`/posts/${postId}`] = { postId, title, content, userId }
            //Relation
            newPost[`/user-posts/${userId}/${postId}`] = { postId, title, content,userId }
            await this.db.ref().update(updates)
        }catch(error) {
            throw error
        }
    }    
    deletePost = async (userId, postId) => {
        await this.db.ref(`/posts/${postId}`).remove()
        await this.db.ref(`/user-posts/${userId}/${postId}`).remove()
    }
}
//Higher order component - HOC
const withFirebase = Component => (props) => (<FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase}/>}
</FirebaseContext.Consumer>)

export {
    withFirebase,
    Firebase
}