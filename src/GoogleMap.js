import React, { Component } from 'react';

export default class GoogleMap extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className="starter-template">
                <h1>Mexico City Map</h1>
                <div id="map"> </div>
            </div>
        );
    }
}