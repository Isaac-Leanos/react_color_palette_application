import React, { Component } from 'react';
import './App.css';
import Palette from "./Palette";
import seedColors from "./seedColors";
import {generatePalette} from "./colorHelpers";

class App extends Component {
  render() {
    console.log(generatePalette(seedColors[3]) )
    return (
      <div className="App">
        <Palette palette={generatePalette(seedColors[3]) }></Palette>
      </div>
    );
  }
}

export default App;
