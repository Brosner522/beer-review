import React, { Component } from 'react';
import '../App.css';


class BeerCard extends Component {


    state ={
        value: ""
    }
    
    handlechange(event) {
        this.setState({
            value: event.target.value
        })
    }


    render() {
        return (


            <div className={"Card"} width="auto" height="500">
                <div className="edit-button">
                    <button onClick={() => this.props.editBeer(this.props.beer)}>Review this beer</button>
                    
                    {this.props.reviewBeer === true ? 
                   <form>
                        <label>
                            New Comment:
                         <input 
                         type="text" 
                         handleChange={this.handleChange}
                         value={this.state.value}
                         name="review" /> 
                    </label>
                        <input onClick={() => this.props.addComment()} type="submit" value="submit" />
                    </form> 
                    :
                    null
                    } 
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