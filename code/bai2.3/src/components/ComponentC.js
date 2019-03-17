import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ComponentC extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <h2 style={{color: this.props.color}}>{this.props.message}</h2>
    }
}
ComponentC.propTypes = {
    color: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
}
export default ComponentC