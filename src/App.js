import logo from './logo.svg';
import './App.css';
import BeerContainer from './Components/BeerContainer';
import { Component } from 'react';
import Filter from './Components/Filter';




class App extends Component {

  state = {
    beers: []
  }

  componentDidMount() {
    fetch("http://localhost:3001/beers")
      .then(res => res.json())
      .then(data => console.log(data))
    // this.setState({
    //   beers: beers

  }

  render() {
    return (
      <>
        <Filter />
        <BeerContainer beers={this.state.beers} />
      </>
    );
  }
}

export default App;
