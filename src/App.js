import React, {  } from 'react';
import './App.css';
import Palette from "./Palette";
import seedColors from "./seedColors";
import {generatePalette} from "./colorHelpers";
import {Route, Switch} from "react-router-dom";
import PaletteList from "./PaletteList";


// homescreen 
const App = ()=>{

    const findPalette = paletteID => {
        const found = seedColors.find(palette => palette.id === paletteID )
        return found;
      }

      return (
        <Switch>
          {/* route 1 */}
          <Route exact path="/" render={ ()=> <PaletteList palettes={seedColors}></PaletteList>  } 
          />
          {/* route 2 */}
          <Route exact path="/palette/:id" 
                 render={routeProps=>( 
                      <Palette palette={generatePalette(findPalette(routeProps.match.params.id) )} />
                 )} 
          />
      </Switch>
    );
}

export default App;
