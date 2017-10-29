import React, { Component } from 'react';

export default class Remove extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.removeFavorite("{\"Name\": \"" +this.props.Name+"\", \"Address\": \""+this.props.Address+"\"}");
    }
    render() {
        return (
            <button onClick={this.handleClick}>Remove</button>
        );
    }
}
