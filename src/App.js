import './App.css';
import BeerContainer from './Components/BeerContainer';
import { Component } from 'react';
import Filter from './Components/Filter';
import BeerForm from './Components/BeerForm'




class App extends Component {

  state = {
    beers: [],
    filterOrganic: false,
    display: false
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

  addBeer = (newBeer) => {
    this.setState({
      beers: [...this.state.beers, newBeer]
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


    // filteredBeers = this.state.filterOrganic === true ? this.state.beers.filter(beer => beer.organic === true) : this.state.beers
    return filteredBeers
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

  sortByRating = () => {
    this.state.beers.map(beer => beer.rating)
  }

  render() {
    return (
      <>
        {this.state.display ?
          <BeerForm createBeer={this.createBeer} /> : null}
        <div className="buttonContainer">
          <button onClick={this.handleClick}>Add a Beer</button>
        </div>
        <Filter sortByRating={this.sortByRating} handleOrganic={this.handleOrganic} />
        <BeerContainer
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
