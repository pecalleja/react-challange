import React, { Component } from 'react';
import Favorites from "./Favorites";
import StoreList from "./StoreList";

export default class Container extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="container">
                <StoreList List={this.props.List} />
            </div>
        );
    }
}