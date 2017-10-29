import React, { Component } from 'react';
import Favorites from "./Favorites";

export default class Container extends Component {
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
            <div id="container">
                <Favorites List={this.state.list}/>
            </div>
        );
    }
}