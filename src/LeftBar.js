import React, { Component } from 'react';

export default class LeftBar extends Component {
    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback
        this.showMap = this.showMap.bind(this);
        this.showStores = this.showStores.bind(this);
        this.showFavorites = this.showFavorites.bind(this);
    }
    showMap() {
        this.props.renderView('map');
    }

    showStores() {
        this.props.renderView('stores');
    }

    showFavorites() {
        this.props.renderView('favorites');
    }
    render() {
        return (
            <div id="left_bar">
                <h1>Students Menu</h1>
                <ul>
                    <li onClick={this.showMap}>City Map</li>
                    <li onClick={this.showStores}>Stores</li>
                    <li onClick={this.showFavorites}>Favorites</li>
                </ul>
            </div>
        );
    }
}