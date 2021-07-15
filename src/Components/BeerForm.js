import React, { Component } from "react";

class BeerForm extends Component {
  state = {
    name: "",
    company: "",
    image: "",
    comments: [],
    organic: false,
    location: "",
  };

  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let newBeer = { ...this.state };
    this.setState({
      name: "",
      company: "",
      image: "",
      comments: [],
      organic: "",
      location: "",
    });
    this.props.createBeer(newBeer);
  };

  organicState = () => {
    this.setState({
      organic: !this.state.organic,
    });
  };

  render() {
    return (
      <div className="beer-form">
        <form className="add-beer" onSubmit={this.handleSubmit}>
          <h3>Add a beer</h3>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            placeholder="Enter the beer's name..."
            className="input-text"
          />
          <br />
          <input
            onChange={this.handleChange}
            type="text"
            name="company"
            placeholder="Enter brewing company..."
            className="input-text"
          />
          <br />
          <input
            onChange={this.handleChange}
            type="text"
            name="image"
            placeholder="Enter of image beer..."
            className="input-text"
          />
          <br />
          <input
            onChange={this.organicState}
            type="checkbox"
            value="organic"
            className="input-text"
          />
          Organic?
          <br />
          <input
            onChange={this.handleChange}
            type="text"
            name="location"
            placeholder="Enter brewing location..."
            className="input-text"
          />
          <br />
          <input
            onChange={this.handleChange}
            type="text"
            name="rating"
            placeholder="Please submit rating..."
            className="input-text"
          />
          <br />
          <input
            onClick={this.createBeer}
            type="submit"
            name="submit"
            value="Submit"
            className="button"
          />
        </form>
      </div>
    );
  }
}

export default BeerForm;
