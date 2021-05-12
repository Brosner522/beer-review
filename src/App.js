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
    beersDuplicate: []
  }

  componentDidMount() {
    fetch("http://localhost:3001/beers")
      .then(res => res.json())
      .then(beers => this.setState({
        beers: beers,
        beersDuplicate: beers
      }))

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
    const beersToSort = this.state.beers

    // if (this.state.filterOrganic) {
    //   filteredBeers = this.state.beers.filter(beer => beer.organic === true)
    // }
    console.log("0", this.state.beers)
    if (this.state.sortRating === true ) { 
      console.log("1", this.state.beers)
      filteredBeers = beersToSort.sort((a,b) => parseFloat(b.rating) - parseFloat(a.rating))
      // console.log(beersToSort)
      console.log("2", this.state.beers)
    }
    else {
      filteredBeers = this.state.beers
    }
    // else {
      //   filteredBeers = this.state.beers
      // }

    // filteredBeers = this.state.filterOrganic === true ? this.state.beers.filter(beer => beer.organic === true) : this.state.beers
    // console.log("first", this.state.beers)
    // console.log("second", filteredBeers)
    return filteredBeers
  }

  editBeer = (beer) => {
    fetch(`http://localhost:3001/beers/${beer.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(beer),
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
        />
      </>
    );
  }
}

export default App;
