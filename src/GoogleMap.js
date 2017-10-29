import React, { Component } from 'react';

export default class GoogleMap extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    render() {
        return (
            <div id="map">
                <h1>Mapa de google {this.props.data}</h1>
            </div>
        );
    }
}