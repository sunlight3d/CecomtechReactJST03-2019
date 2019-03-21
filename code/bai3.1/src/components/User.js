import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter,
  } from "react-router-dom"
const BackButton = withRouter(({ history }) => {
    return <button onClick={() => {
        history.push("/")
    }}>Back to Root
    </button>
})
export default class User extends Component {

    render() {
        return <div>
            <h3>This is User Page</h3>
            <p>UserId : {this.props.match.params.id}</p>
            <BackButton />
        </div>
    }
}