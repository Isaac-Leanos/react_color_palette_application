import React, { Component } from 'react';
import './App.css';
import Palette from "./Palette";
import seedColors from "./seedColors";
import {generatePalette} from "./colorHelpers";
import {Route, Switch} from "react-router-dom";


// homescreen 
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={()=><h1>jiijij</h1>} />
        {/* <Route/> */}
        {/* <div className="App">
          <Palette palette={generatePalette(seedColors[1]) }></Palette>
        </div> */}
      </Switch>
    );
  }
}

export default App;
