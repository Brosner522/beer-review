import React, { Component } from 'react';
import BeerCard from './BeerCard'

class BeerContainer extends Component {
    render() {
        return (
            <div className={'beerContainer'}>
                {this.props.beers.map(beer => <BeerCard key={beer.id} beer={beer} />)}
            </div>

        )
    }
}





export default BeerContainer;