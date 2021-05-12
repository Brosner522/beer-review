import React, { Component } from 'react';
import '../App.css';


class BeerCard extends Component {

    state = {
        value: '',
        comments: [this.props.beer.comments]
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const newComment = this.state.value
        this.setState({
            comments: [...this.state.comments, newComment]
        })
    }

    render() {
        return (


            <div className={"Card"} width="auto" height="500">
                <div className="edit-button">
                    <button onClick={() => this.props.editBeer(this.props.beer)}>Review this beer</button>

                    {this.props.reviewBeer === true ?
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                New Comment:
                         <input type="text" value={this.state.value} onChange={this.handleChange} />

                            </label>
                            <input type="submit" value="submit" />
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
                    <div className="header">{this.state.comments}</div>
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