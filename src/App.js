import React, { Component } from "react";
import List from "./List";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { breeds: [] };
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(results => results.json())
      .then(data => {
        this.setState({ breeds: Object.keys(data.message) });
        console.log(Object.keys(data.message));
      });
  }

  render() {
    return (
      <div className="App">
        <List breeds={this.state.breeds} />
      </div>
    );
  }
}

export default App;
