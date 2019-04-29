import React, {  } from 'react';
import {Link} from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles} from "@material-ui/styles";




// homescreen 
const PaletteList = ({palettes})=>{
      return (
          <div>
          <MiniPalette/>
            {palettes.map(pal=>(
                    <Link to={`/palette/${pal.id}`}>
                        <h1>{pal.paletteName}</h1>
                    </Link>
                // </MiniPalette>
            ))}
        </div>
    )
}

export default PaletteList;
