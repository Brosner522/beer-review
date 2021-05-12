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
    sortRating: false
  }

  componentDidMount() {
    fetch("http://localhost:3001/beers")
      .then(res => res.json())
      .then(beers => this.setState({
        beers: beers
      }))

  }

  handleOrganic = () => {
    this.setState({
      filterOrganic: !this.state.filterOrganic
    })
  }

  // sortBeers = () => {
  //   this.setState({
  //     sortRating: !this.state.sortRating
  //   })
  // }


  addBeer = (newBeer) => {
    this.setState({
      beers: [...this.state.beers, newBeer]
    })
  }

  // sortBeers = (sortBy) => {
  //   this.setState({
  //     sort: sortBy,
  //     beers: this.state.beers.sort(
  //       (a,b) => sortBy === "rating" ? a.rating - b.rating : null
  //     )
  //   })
  // }

  sortBeers = () => {
    this.setState({
        beers: this.state.beers.sort((a,b) => parseFloat(b.rating) - parseFloat(a.rating)),
      sortRating: !this.state.sortRating
    })
  }

  beersToShow = () => {
    let filteredBeers = []
    if (this.state.filterOrganic) {
      filteredBeers = this.state.beers.filter(beer => beer.organic === true)
    }
    else {
      filteredBeers = this.state.beers
    }
    // else if (this.state.sortRating === true ) { filteredBeers = this.state.beers.sort((a,b) => parseFloat(b.rating) - parseFloat(a.rating))
    // }
    // else {
      //   filteredBeers = this.state.beers
      // }

    // filteredBeers = this.state.filterOrganic === true ? this.state.beers.filter(beer => beer.organic === true) : this.state.beers
    return filteredBeers
  }
  editBeer = (beers) => {
    const beerId = {beers.id}

    fetch(`http://localhost:3001/beers/${beers.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(beers),
    })
    .then((res) => res.json())
    .then((beerObj) => console.log(beerObj))
  }

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
          editBeer={this.editBeer}
          beers={this.beersToShow()}
          // beers={this.state.beers} 
          handleOrganic={this.handleOrganic}
          organic={this.state.filterOrganic}
        />
      </>
    );
  }
}

export default App;
