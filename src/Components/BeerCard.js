import React, { Component } from 'react';
import '../App.css';


class BeerCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: '',
            comments: [...props.beer.comments], //[[]]
            reviewBeer: false
        }
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     const newComment = this.state.value
    //     this.setState({
    //         comments: [...this.state.comments, newComment]
    //     })
    // }

    reviewBeerSwitch = () => {
        this.setState({
            reviewBeer: !this.state.reviewBeer
        })
    }

    editBeer = (e) => {
        // debugger
        e.preventDefault()
        const newComment = this.state.value

        // this.setState({
        //     comments: [...this.state.comments, newComment]
        // })

        fetch(`http://localhost:3001/beers/${this.props.beer.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                comments: [...this.props.beer.comments, newComment] //because we are add a comment to already exsiting beer object
            }),
        })
            .then((res) => res.json())
            .then((beerObj) => {
                // const newComment = this.state.value
                // beerObj.comments = this.state.comments
                // const spreadComments = this.props.beer.comments.push(newComment)
                this.setState({
                    comments: beerObj.comments
                })
            })
    }

    render() {
        console.log(this.props.beer.comments, this.state.comments)
        return (


            <div className="card" width="auto" height="500">
                <div className="edit-button">
                    <button onClick={() => this.reviewBeerSwitch()}>Review this beer</button>

                    {this.state.reviewBeer === true ?
                        <form onSubmit={(e) => this.editBeer(e)} >
                            <label>
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
                    <div className="header">
                        {this.state.comments.map(comment => <li>{comment}</li>)}
                    </div>
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