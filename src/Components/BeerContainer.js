import React, { Component } from 'react';
import BeerCard from './BeerCard'

class BeerContainer extends Component {
    render() {
        return (
            <div className={'beerContainer'}>
                <h1>I am here</h1>
                {this.props.beers.map(beer => <BeerCard beerObj={beer} />)}
            </div>
        )
    }
}





export default BeerContainer;