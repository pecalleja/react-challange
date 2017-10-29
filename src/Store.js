import React, { Component } from 'react';

export default class Store extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="store">
                <h3>{this.props.Name}</h3>
                <p>{this.props.Address}</p>
                <hr/>
            </div>
        );
    }
}