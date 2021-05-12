import React, { Component } from 'react';
import '../App.css';


class BeerCard extends Component {
    render() {
        return (


            <div className={"Card"} width="auto" height="500">
                <div className="edit-button">
                    <button onClick={() => this.props.editBeer()}>Review this beer</button>
                </div>
                <div className="image">
                    <img width="auto" height="300" src={this.props.beer.image} alt="oops" />
                </div>
                <div className="name">
                    <div className="header">{this.props.beer.name}</div>
                </div>
                <div className="company">
                    <div className="header">{this.props.beer.company}</div>
                </div>
                <div className="comments">
                    <div className="header">{this.props.beer.comments}</div>
                </div>
                <div className="organic">
                    <div className="header">{this.props.beer.organic}</div>
                </div>
                <div className="location">
                    <div className="header">{this.props.beer.location}</div>
                </div>
                <div className="location">
                    <div className="header">{this.props.beer.rating}★</div>
                </div>

            </div>

        )

    }
}

export default BeerCard;