import React, { Component } from 'react';
import NavBar from './NavBar';
import Container from './Container';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active_view: 'map',//default show map
        }
    }
    //emulate routes in my application
    renderView(view){
        this.setState({
            active_view: view
        });
        console.log('route: ' + view);
    }
    render() {
        return (
            <div id="main">
                <NavBar ActiveView={this.state.active_view} renderView={(e)=>this.renderView(e)} />
                <Container ActiveView={this.state.active_view} />
            </div>
        );
    }
}