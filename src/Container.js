import React, { Component } from 'react';
import StoreList from "./StoreList";
import GoogleMap from "./GoogleMap";

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            store_list: [],
            favorite_list: []
        }
    }
    addFavorite(item){
        let rows = this.state.favorite_list;
        rows.push(JSON.parse(item));
        this.setState({
            favorite_list: rows
        });

    }
    removeFavorite(item){
        let rows = this.state.favorite_list;
        let remove_name = JSON.parse(item).Name;
        rows.forEach(function (element,index,array) {
            if(element.Name === remove_name){
                let removed = array.splice(index, 1);
            }

        });
        this.setState({
            favorite_list: rows
        });
    }
    componentDidMount() {
        let oReq = new XMLHttpRequest();
        oReq.open("get", "store_directory.json", false);
        oReq.send();
        let data = JSON.parse(oReq.responseText);
        this.setState({store_list: data});
    }
    render() {
        const view = this.props.ActiveView;
        let container;
        switch (view){
            case 'favorites':
                container = <StoreList header="Favorites List" List={this.state.favorite_list} removeFavorite={(e)=>this.removeFavorite(e)} addFavorite={(e)=>this.addFavorite(e)}/>;
                break;
            case 'stores':
                container = <StoreList header="All Stores" List={this.state.store_list} removeFavorite={(e)=>this.removeFavorite(e)} addFavorite={(e)=>this.addFavorite(e)}/>;
                break;
            case 'map':
            default:
                container = <GoogleMap data=""/>;
        }
        return (
            <div id="container">
                {container}
            </div>
        );
    }
}