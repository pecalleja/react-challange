import React, { Component } from 'react';
import LeftBar from './LeftBar';
import Container from './Container';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active_view: 'map',
        }//default show map
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
                <LeftBar renderView={(e)=>this.renderView(e)} />
                <Container ActiveView={this.state.active_view} />
            </div>
        );
    }
}