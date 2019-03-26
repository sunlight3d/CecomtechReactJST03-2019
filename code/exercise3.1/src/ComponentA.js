import React, {Component} from 'react'
import {DatabaseContext} from './Database'
class ComponentA extends Component {
    render() {
        const {dbName} = this.props.database
        return <h2 >{`This is Component A. DBName = ${dbName}`}</h2>
    }
}


const withDatabase = Component => (props) => <DatabaseContext.Consumer>
    {database => <ComponentA {...props} database={database}/>}
</DatabaseContext.Consumer>

export default withDatabase(ComponentA)