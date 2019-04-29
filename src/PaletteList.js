import React, { useState } from 'react';
import MiniPalette from "./MiniPalette";
import { withStyles} from "@material-ui/styles";


const styles = {
    root: {
        background: "blue",
        height: "100vh",
        display: "flex",
        // alignItems: "center", 
        alignItems: "flex-start", 
        justifyContent: "center"
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
const PaletteList = ({palettes, classes})=>{
      return (
          <div className={classes.root}>


            <div className={classes.container}>
                <nav className={classes.nav}><h1>React Color Palettes</h1></nav>
                <div className={classes.miniPalettes}>
                    {palettes.map(pal=>(
                        <MiniPalette {...pal}></MiniPalette>
                    ))}
                </div>
            </div>


          </div>
    )
}

export default withStyles(styles)(PaletteList);
