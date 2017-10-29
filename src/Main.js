import React, { Component } from 'react';
import LeftBar from './LeftBar';
import Container from './Container';
import GoogleMap from "./GoogleMap";
import Favorites from "./Favorites";

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {active_view: 'map'}
    }
    renderView(view){
        this.setState({
            active_view: view
        });
        console.log(view);
    }
    render() {
        const view = this.state.active_view;
        let container;
        //emulate routes in my application
        switch (view){
            case 'favorites':
                container = <Container/>;
                break;
            case 'stores':
                container = <GoogleMap data="con datos"/>;
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