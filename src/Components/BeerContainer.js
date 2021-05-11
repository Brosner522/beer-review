import React, { Component } from 'react';
import BeerCard from './BeerCard'

class BeerContainer extends Component {
    render() {

        const organicBeers = this.props.beers.filter(beer => beer.organic === true)
// console.log(filter organic)
        return (
            <div className={'beerContainer'}>

                
                {this.props.organic === false ? 
                this.props.beers.map(beer => <BeerCard key={beer.id} beer={beer} />)
                : organicBeers.map(beer => <BeerCard key={beer.id} beer={beer}  />)
                }

                
            </div>
        )
    }
}





export default BeerContainer;