import React, { Component } from "react";

class Breed extends Component {
  constructor(props) {
    super(props);
    this.state = { imgUrl: null };
  }

  render() {
    return (
      <p
        onClick={() =>
          fetch(`https://dog.ceo/api/breed/${this.props.breed}/images/random`)
            .then(results => results.json())
            .then(data => {
              this.setState({ imgUrl: data.message });
            })
        }
      >
        {this.props.breed}
        {this.state.imgUrl && <img src={this.state.imgUrl} alt="breed" />}
      </p>
    );
  }
}

export default Breed;
