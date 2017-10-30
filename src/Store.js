import React, { Component } from 'react';
import Add from "./Add";
import Remove from "./Remove";

export default class Store extends Component {
    constructor(props) {
        super(props);
        this.state = {isFavorite: false};
    }
    addFavorite(item){
        this.setState(prevState => ({
            isFavorite: true
        }));
        this.props.addFavorite(item);
    }
    removeFavorite(item){
        this.setState(prevState => ({
            isFavorite: false
        }));
        console.log('remove');
        this.props.removeFavorite(item);
    }
    isFavorite(){

    }
    render() {
        const favorite = this.state.isFavorite;
        let favoriteStyle;
        let action;
        if(favorite === true){
            favoriteStyle = {
                backgroundColor: "#ffde00",
            };
            action = <Remove Name={ this.props.Name } Address={ this.props.Address } removeFavorite={(e)=>this.removeFavorite(e)}/>
        }else{
            favoriteStyle = {
                backgroundColor: "#ffffff",
            };
            action = <Add Name={ this.props.Name } Address={ this.props.Address } addFavorite={(e)=>this.addFavorite(e)}/>
        }

        return (
            <div style={favoriteStyle} id="store">
                {action}
                <h3>{this.props.Name}</h3>
                <p>{this.props.Address}</p>
                <hr/>
            </div>
        );
    }
}
