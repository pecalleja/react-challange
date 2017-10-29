import React, { Component } from 'react';
import Store from "./Store";

export default class StoreList extends Component {
    constructor(props) {
        super(props);
    }
    addFavorite(item){
        this.props.addFavorite(item);
    }
    removeFavorite(item){
        this.props.removeFavorite(item);
    }

    render() {
        const list = this.props.List;
        const rows = list.map((item) =>
            <Store Name={ item.Name } key={ item.Name }  Address={ item.Address } removeFavorite={(e)=>this.removeFavorite(e)} addFavorite={(e)=>this.addFavorite(e)}/>
        );
        return (
            <div id="list">
                <h2>{this.props.header} ( {rows.length} )</h2>
                { rows }
            </div>
        );
    }
}