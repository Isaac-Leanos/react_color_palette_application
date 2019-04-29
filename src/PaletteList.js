import React, {  } from 'react';
import "./PaletteList.css";
import Palette from "./Palette";
import seedColors from "./seedColors";
import {generatePalette} from "./colorHelpers";
import {Route, Switch} from "react-router-dom";
import {Link} from "react-router-dom";


// homescreen 
const PaletteList = ({palettes})=>{
        
      return (
        <div className="palette-list">
            {palettes.map(pal=>(
                <Link to={`/palette/${pal.id}`}>
                    <h1>{pal.paletteName}</h1>
                </Link>
            ))}
        </div>
    )
}

export default PaletteList;
