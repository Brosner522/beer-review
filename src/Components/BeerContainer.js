import React, { Component } from 'react';

class BeerContainer extends Component {
    render() {
        return (
            <div className={'beerContainer'}>
                <h1>I am here</h1>
                {this.props.beers.map()}
            </div>
        )
    }
}





export default BeerContainer;