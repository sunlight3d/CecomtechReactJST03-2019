import React, {Component} from 'react';
const ComponentA = props => {
    return <h2 style={{color: props.color}}>{props.message}</h2>
}

export default ComponentA