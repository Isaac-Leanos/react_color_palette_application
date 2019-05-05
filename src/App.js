import React, {  } from 'react';
import './App.css';
import Palette from "./Palette";
import seedColors from "./seedColors";
import {generatePalette} from "./colorHelpers";
import {Route, Switch} from "react-router-dom";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";


// homescreen 
const App = ()=>{

    const findPalette = paletteID => {
        const found = seedColors.find(palette => palette.id === paletteID )
        return found;
      }

      return (
        <Switch>
          {/* route 1 */}
          <Route exact path="/" render={ (myRouteProps)=> <PaletteList palettes={seedColors} {...myRouteProps}></PaletteList>  } // difference between render & component attr
          />
          {/* route 2 */}
          
          <Route exact path="/palette/:id" 
                 render={myRouteProps=>( 
                   <Palette palette={generatePalette(findPalette(myRouteProps.match.params.id) )} />
                   )} 
          />
          {/* route 3 */}
          <Route exact path="/palette/:paletteId/:colorId" 
                 render={myRouteProps=>( 
                      <SingleColorPalette singlePalette={generatePalette(findPalette(myRouteProps.match.params.paletteId) )} 
                      colorName={myRouteProps.match.params.colorId} />
                 )} 
          />
      </Switch>
    );
}

export default App;
