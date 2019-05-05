import React, { useState } from 'react';
import MiniPalette from "./MiniPalette";
import { withStyles} from "@material-ui/styles";


const styles = {
    root: {
        background: "#b3d8fb",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start", 
        alignItems: "flex-start", 
        justifyContent: "center",
        overflow: "hidden"

    },
    container: {
        border: "1px solid red",
        width: "50%",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap"
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white"
    },
    miniPalettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "30% 30% 30%",
        gridGap: "5%"
    }
}


// homescreen 
const PaletteList = ({palettes, classes, history})=>{
      console.log('######',palettes)
      return (
          <div className={classes.root}>


            <div className={classes.container}>
                <nav className={classes.nav}><h1>React Color Palettes</h1></nav>
                <div className={classes.miniPalettes}>
                    {palettes.map(pal=>(
                        <MiniPalette {...pal} history={history}></MiniPalette>
                    ))}
                </div>
            </div>


          </div>
    )
}

export default withStyles(styles)(PaletteList);
