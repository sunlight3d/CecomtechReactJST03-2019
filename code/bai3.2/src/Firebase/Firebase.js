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
    }
    //Functions for login/register
    createUserWithEmailAndPassword = (email, password) => {
        this.auth.createUserWithEmailAndPassword(email, password)        
    } 
    signInWithEmailAndPassword = (email, password) => {
        this.auth.signInWithEmailAndPassword(email, password)
    }
    signOut = () => {
        this.auth.signOut()        
    }    
    sendPasswordResetEmail = (email) => {
        this.auth.sendPasswordResetEmail(email)
    }
}
//Higher order component - HOC
const withFirebase = Component => (props) => (<FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase}/>}
</FirebaseContext.Consumer>)

export {
    Firebase,
    FirebaseContext,
    withFirebase
}