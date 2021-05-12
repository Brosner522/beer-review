import './App.css';
import BeerContainer from './Components/BeerContainer';
import { Component } from 'react';
import Filter from './Components/Filter';
import BeerForm from './Components/BeerForm'




class App extends Component {

  state = {
    beers: [],
    filterOrganic: false,
    display: false,
    sortRating: false,
    beersDuplicate: [],
    reviewBeer: false,
    comments: [""]
  }

  componentDidMount() {
    fetch("http://localhost:3001/beers")
      .then(res => res.json())
      .then(beers => this.setState({
        beers: beers,
        beersDuplicate: beers
      })
      )
  }


  handleOrganic = () => {
    this.setState({
      filterOrganic: !this.state.filterOrganic
    })
  }

  addBeer = (newBeer) => {
    this.setState({
      beers: [...this.state.beers, newBeer]
    })
  }

  sortBeers = () => {
    this.setState({
      sortRating: !this.state.sortRating
    })
  }

  beersToShow = () => {
    let filteredBeers = []
    const beersToSort = [...this.state.beers]

    if (this.state.filterOrganic) {
      filteredBeers = this.state.beers.filter(beer => beer.organic === true)
    }
    else if (this.state.sortRating === true) {
      filteredBeers = beersToSort.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
    }
    else {
      filteredBeers = this.state.beers
    }
    return filteredBeers
  }
  //Map over array od comments
  // Return new array wiith added comment from user submission.


  editBeer = (beer) => {
    const beerComments = [...beer.comments /* ,new comment */]
    fetch(`http://localhost:3001/beers/${beer.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(beer),
    })
      .then((res) => res.json())
      .then((beerObj) => {
        console.log(beerComments)
        this.setState({
          reviewBeer: !this.state.reviewBeer,
          comments: beerObj.comments
        })
      })
  }

  // addComment = () => {
  //   this.setState({
  //     comments: [...beers.comments]
  //   })
  // }

  createBeer = (newBeer) => {
    const reqMethod = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newBeer)
    }

    fetch('http://localhost:3001/beers', reqMethod)
      .then(res => res.json())
      .then(newBeer => {
        let beers = [...this.state.beers, newBeer]
        this.setState({
          beers: beers,
          display: false
        })
      })
  }

  handleClick = () => {
    let newDisplay = !this.state.display
    this.setState({
      display: newDisplay
    })
  }

  render() {
    return (
      <><h1>Beer Reviews</h1>
        {this.state.display ?
          <BeerForm createBeer={this.createBeer} /> : null}
        <div className="buttonContainer">
          <button onClick={this.handleClick}>Add a Beer</button>
        </div>

        <Filter
          handleOrganic={this.handleOrganic}
          sortBeers={this.sortBeers}
        />

        <BeerContainer
          reviewBeer={this.state.reviewBeer}
          editBeer={this.editBeer}
          beers={this.beersToShow()}
        />
      </>
    );
  }
}

export default App;
