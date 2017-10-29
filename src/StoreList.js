import React, { Component } from 'react';
import Store from "./Store";

export default class StoreList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var rows = [];
        if( this.props.List !== null || this.props.List.length !== 0 ) {
            this.props.List.forEach(function(store, index) {
                rows.push(<Store Name={ store.Name } key={ index } Address={ store.Address } />)
            })
        } else {
            rows.push(<h1>No elements in the list !  :( </h1>)
        }

        return (
            <div id="list">
                { rows }
            </div>
        );
    }
}