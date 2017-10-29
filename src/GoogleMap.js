import React, { Component } from 'react';

export default class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {list: []};
    }
    componentDidMount() {
        var oReq = new XMLHttpRequest();
        oReq.open("get", "store_directory.json", false);
        oReq.send();
        let data = JSON.parse(oReq.responseText);
        this.setState({list: data});
    }
    render() {
        return (
            <div id="map">
                <h1>Mapa de google {this.props.data}</h1>
            </div>
        );
    }
}