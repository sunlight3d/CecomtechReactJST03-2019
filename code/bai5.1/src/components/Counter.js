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
            <Label size={Sizes.LARGE}>Counter :</Label>
            <Button color={Colors.PRIMARY} size={Sizes.SMALL}
                onClick={(event) => {
                    dispatch(increase(2))
                }}>

            </Button>
            <Label size={Sizes.LARGE} color={Colors.ALERT}>Number: {counts}</Label>
            <Button color={Colors.PRIMARY} size={Sizes.SMALL}
                onClick={(event) => {
                    dispatch(decrease(2))
                }}>

            </Button>
        </div>)
    }
}
const mapStateToProps = (state) => {
    return {
        counts: state.counterReducer
    }
}
const withProvider = Component = (props) => {
    return <Provider store={store}>
        <Component {...props}/>
    </Provider>
}
export default withProvider(connect(mapStateToProps)(Counter))