import React, { Component } from 'react';
import LeftBar from './LeftBar';
import Container from './Container';
import GoogleMap from "./GoogleMap";
import Favorites from "./Favorites";

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active_view: 'map',
            store_list: [],
            favorite_list: []
        }//default show map
    }
    //emulate routes in my application
    renderView(view){
        this.setState({
            active_view: view
        });
        console.log('route: ' + view);
    }
    addFavorite(item){
        console.log(item);
    }
    componentDidMount() {
        var oReq = new XMLHttpRequest();
        oReq.open("get", "store_directory.json", false);
        oReq.send();
        let data = JSON.parse(oReq.responseText);
        this.setState({store_list: data});
    }
    render() {
        const view = this.state.active_view;
        let container;
        switch (view){
            case 'favorites':
                container = <Container List={this.state.favorite_list} addFavorite={(e)=>this.addFavorite(e)}/>;
                break;
            case 'stores':
                container = <Container List={this.state.store_list } addFavorite={(e)=>this.addFavorite(e)}/>;
                break;
            case 'map':
            default:
                container = <GoogleMap data=""/>;
        }
        return (
            <div id="main">
                <LeftBar renderView={(e)=>this.renderView(e)} />
                {container}
            </div>
        );
    }
}