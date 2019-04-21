import React, { Component } from 'react';
import './App.css';
import Palette from "./Palette";
import seedColors from "./seedColors";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Palette {...seedColors[5]}></Palette>
      </div>
    );
  }
}

export default App;
