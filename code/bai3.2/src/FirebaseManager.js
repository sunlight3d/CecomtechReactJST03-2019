import React, {Component} from 'react'
/**
 * npm i firebase
 */
import app from 'firebase/app'
const config =  {
    apiKey: "AIzaSyBTb-XtNdRVDX2hLCaBGSVRfiLs8ljfN6Q",
    authDomain: "reacttutorials-43010.firebaseapp.com",
    databaseURL: "https://reacttutorials-43010.firebaseio.com",
    projectId: "reacttutorials-43010",
    storageBucket: "reacttutorials-43010.appspot.com",
    messagingSenderId: "835387535542"
};

class FirebaseManager {
    constructor() {
        app.initializeApp(config)
    }
}
