import React, { Component } from 'react';
import BeerCard from './BeerCard'

class BeerContainer extends Component {
    render() {

        // const organicBeers = this.props.beers.filter(beer => beer.organic === true)
        // console.log(filter organic)
        return (
            <div className={'beerContainer'}>



                {this.props.beers.map(beer => 
                <BeerCard 
                key={beer.id} 
                beer={beer} 
                editBeer={this.props.editBeer}
                />)}



            </div>

        )
    }
}





export default BeerContainer;