import React, { Component } from 'react';

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback
        this.showMap = this.showMap.bind(this);
        this.showStores = this.showStores.bind(this);
        this.showFavorites = this.showFavorites.bind(this);
    }
    showMap() {
        this.props.renderView('map');
    }
    showStores() {
        this.props.renderView('stores');
    }

    showFavorites() {
        this.props.renderView('favorites');
    }
    render() {
        //emulate the navigation sistems
        const active_view = this.props.ActiveView;
        let map,stores,favorites;
        if(active_view === 'map'){
            map = <li onClick={this.showMap} className="active"><a>City Map</a></li>;
        }else{
            map = <li onClick={this.showMap}><a>City Map</a></li>;
        }
        if(active_view === 'stores'){
            stores = <li onClick={this.showStores} className="active"><a>All Stores</a></li>;
        }else{
            stores = <li onClick={this.showStores}><a>All Stores</a></li>;
        }
        if(active_view === 'favorites'){
            favorites = <li onClick={this.showFavorites} className="active"><a>Favorite Stores</a></li>;
        }else{
            favorites = <li onClick={this.showFavorites}><a>Favorite Stores</a></li>;
        }

        return (
        <div id="nav_bar" className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button ref="toogle" type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="icon-bar"> </span>
                        <span className="icon-bar"> </span>
                        <span className="icon-bar"> </span>
                    </button>
                    <a className="navbar-brand">Student Menu: </a>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        {map}
                        {stores}
                        {favorites}
                    </ul>
                </div>
            </div>
        </div>
        );
    }
}