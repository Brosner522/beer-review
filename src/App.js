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
    fetch("e2f200350fmsh95ead331d49f3dbp1075c9jsncabcb8d5806e")
      .then(res => res.json())
      .then(data => console.log(data))
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
