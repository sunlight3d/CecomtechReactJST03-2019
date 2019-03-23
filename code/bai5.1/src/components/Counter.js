import React, {Component} from 'react'
import 'foundation-sites/dist/css/foundation.min.css'
import Foundation,{Button, Label, Colors, Sizes} from 'react-foundation'
import {connect} from 'react-redux'
import {increase, decrease} from '../actions'
class Counter extends Component {    
    constructor(props) {
        super(props)
    }
    render() {
        const {dispatch} = this.props
        return (<div>
            <Label size={Sizes.LARGE}>Counter :</Label>
            <Button color={Colors.PRIMARY} size={Sizes.SMALL}
                onClick={(event) => {
                    dispatch(increase(2))
                }}>

            </Button>
            <Button color={Colors.PRIMARY} size={Sizes.SMALL}
                onClick={(event) => {
                    dispatch(decrease(2))
                }}>

            </Button>
        </div>)
    }
}
const mapStateToProps = (state = 0) => {
    return {
        counts: state
    }
}
export default connect(mapStateToProps)(Counter)