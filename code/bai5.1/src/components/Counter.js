import React, {Component} from 'react'
import 'foundation-sites/dist/css/foundation.min.css'
import Foundation,{Button, Label, Colors, Sizes} from 'react-foundation'
import {connect} from 'react-redux'
import {increase, decrease} from '../actions'
import {Provider} from 'react-redux'
import store from '../store'
class Counter extends Component {    
    constructor(props) {
        super(props)
    }
    render() {
        const {dispatch, counts} = this.props
        return (<div>
            <h1>Counter with Redux</h1><br/>
            <Button color={Colors.PRIMARY} size={Sizes.SMALL}
                onClick={(event) => {
                    dispatch(increase(2))
                }}>
                Increase
            </Button> <br/>
            <h1>Number: {counts}</h1>
            <Button color={Colors.PRIMARY} size={Sizes.SMALL}
                onClick={(event) => {
                    dispatch(decrease(2))
                }}>
                Decrease
            </Button>
        </div>)
    }
}
const mapStateToProps = (state) => {
    return {
        counts: state.counterReducer
    }
}
const withProvider = Component => (props) => {
    return <Provider store={store}>
        <Component {...props}/>
    </Provider>
}
export default withProvider(connect(mapStateToProps)(Counter))