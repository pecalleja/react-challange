import React, { Component } from 'react';

export default class Add extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.addFavorite("{\"Name\": \"" +this.props.Name+"\", \"Address\": \""+this.props.Address+"\"}");
    }
    render() {
        return (
            <button onClick={this.handleClick}> Add  </button>
        );
    }
}
