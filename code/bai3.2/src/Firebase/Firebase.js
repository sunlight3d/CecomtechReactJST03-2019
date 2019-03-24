import React from 'react'
/**
 * npm i firebase
 */

import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const FirebaseContext = React.createContext() 
const config = {
    apiKey: "AIzaSyBTb-XtNdRVDX2hLCaBGSVRfiLs8ljfN6Q",
    authDomain: "reacttutorials-43010.firebaseapp.com",
    databaseURL: "https://reacttutorials-43010.firebaseio.com",
    projectId: "reacttutorials-43010",
    storageBucket: "reacttutorials-43010.appspot.com",
    messagingSenderId: "835387535542"
}
class Firebase {
    constructor() {        
        app.initializeApp(config)
        this.auth = app.auth()
        this.db = app.database()
        this.storage = app.storage()
        this.facebookAuthProvider = new app.auth.FacebookAuthProvider()
        this.facebookAuthProvider.setCustomParameters({display: 'popup'})
    }
    signInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password)
    createUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password)
    signOut = () => this.auth.signOut()
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
    addNewPost = (title, content, userId) => {
        const postsRef = this.db.ref().child('posts')
        const newPostId = postsRef.push().key
        let updates = {}
        updates[`/posts/${newPostId}`] = { postId: newPostId, title, content, userId }
        //Relation
        updates[`/user-posts/${userId}/${newPostId}`] = { postId: newPostId, title, content,userId }
        return this.db.ref().update(updates) //a promise
    }    
    updatePost = async (postId, title, content, userId) => {
        try {               
            let updates = {}         
            updates[`/posts/${postId}`] = { postId, title, content, userId }
            //Relation
            updates[`/user-posts/${userId}/${postId}`] = { postId, title, content,userId }
            await this.db.ref().update(updates)
        }catch(error) {
            throw error
        }
    }    
    deletePost = async (userId, postId) => {
        await this.db.ref(`/posts/${postId}`).remove()
        await this.db.ref(`/user-posts/${userId}/${postId}`).remove()
    }
    uploadImage = () => {        
        /*
        const fileName = ''
        const metadata = {contentType: 'image/jpeg'}
        let uploadTask = this.storage.child(`images/${fileName}`).put(file, metadata)
        */
    }
}
//Higher order component - HOC
const withFirebase = Component => (props) => (<FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase}/>}
</FirebaseContext.Consumer>)

export {
    withFirebase,
    Firebase,
    FirebaseContext
}