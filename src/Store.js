import React, { Component } from 'react';

export default class Store extends Component {
    constructor(props) {
        super(props);
        this.state = {isFavorite: false};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
            isFavorite: !prevState.isFavorite
        }));
        //this.props.addFavorite('Name: ' +this.props.Name+', Address: '+this.props.Address);
    }
    render() {
        const favorite = this.state.isFavorite;
        if(favorite === true){
            var favoriteStyle = {
                backgroundColor: "#ffde00",
            };
        }else{
            var favoriteStyle = {
                backgroundColor: "#ffffff",
            };
        }

        return (
            <div style={favoriteStyle} id="store" onClick={this.handleClick}>
                <h3>{this.props.Name}</h3>
                <p>{this.props.Address}</p>
                <hr/>
            </div>
        );
    }
}