import React, {Component} from 'react'
import {withProvider} from '../store'
import {connect} from 'react-redux'
import {increase, decrease} from '../actions'
import 'foundation-sites/dist/css/foundation.min.css'
import {Button, Colors, Sizes, ButtonGroup} from 'react-foundation'
class Counter extends Component {
    onIncrease = (event) => {
        this.props.dispatch(increase(3))
    }
    onDecrease = (event) => {
        this.props.dispatch(decrease(3))
    }
    render() {
        const {x} = this.props
        return <ButtonGroup>
            <Button size={Sizes.SMALL}
                color={Colors.PRIMARY}
                isHollow
                onClick={this.onIncrease}>Increase</Button>
            <h3>{x}</h3>
            <Button size={Sizes.SMALL}
                color={Colors.SUCCESS}
                isHollow
                onClick={this.onDecrease}>Decrease</Button>            
        </ButtonGroup>
    }
}


//Convert state to props
const mapStateToProps = (state=0) => {
    return {
        x: state.counterReducer
    }
}
//Counter is "in" REdux AND BE a "Container"?
/*
const CounterContainer = connect(mapStateToProps)(Counter)
const ContainerWithProvider = withProvider(CounterContainer)
export default ContainerWithProvider
*/
//Summarise
export default withProvider(connect(mapStateToProps)(Counter))

