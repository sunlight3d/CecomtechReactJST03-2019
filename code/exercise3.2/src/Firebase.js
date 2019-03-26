/**
 * npm i firebase
 */
import React, {Component} from 'react'
import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyBTb-XtNdRVDX2hLCaBGSVRfiLs8ljfN6Q",
    authDomain: "reacttutorials-43010.firebaseapp.com",
    databaseURL: "https://reacttutorials-43010.firebaseio.com",
    projectId: "reacttutorials-43010",
    storageBucket: "reacttutorials-43010.appspot.com",
    messagingSenderId: "835387535542"
}

class Firebase {
    constructor(){
        app.initializeApp(config);
        this.auth = app.auth()
        this.db = app.database()
        console.log('Init database')
    }
    sayHello = () => {
        alert('Chao cac ban')
    }
    createUserWithEmailAndPassword = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password)
    
    signInWithEmailAndPassword = (email, password) => 
        this.auth.signInWithEmailAndPassword(email, password)
    

}
const FirebaseContext = React.createContext()  
const withFirebase = Component => (props) => {
    return <FirebaseContext.Consumer>
        {
            firebase => <Component {...props} firebase={firebase}></Component>
        }
    </FirebaseContext.Consumer>
}
export {
    Firebase,
    FirebaseContext, 
    withFirebase
}


