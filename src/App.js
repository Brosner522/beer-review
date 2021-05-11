import './App.css';
import BeerContainer from './Components/BeerContainer';
import { Component } from 'react';
import Filter from './Components/Filter';




class App extends Component {

  state = {
    beers: [],
    filterOrganic: false
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

  render() {
    return (
      <>
        <Filter handleOrganic={this.handleOrganic} />
        <BeerContainer 
          beers={this.state.beers} 
          handleOrganic={this.handleOrganic}
          organic={this.state.filterOrganic}
        />
      </>
    );
  }
}

export default App;
