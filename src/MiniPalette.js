import React from "react";
import {Link} from "react-router-dom";


import { withStyles} from "@material-ui/styles";
import { relative } from "path";


const styles = {
    root: {
        background: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        "&:hover": {
            cursor: "pointer"
        },
    },
    colors: {
        background: "black",
        height: "120px",
        width: "100%",
        borderRadius: "5px",
        overflow: "hidden"
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative",
        height: "34px"
    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1rem"
    },
    miniBoxes: {
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-4px",
    },
    
  
}


const MiniPalette = ({classes, id, paletteName, emoji, colors, history})=>{

    const miniBoxes = colors.map( col => (
        <div className={classes.miniBoxes} style={{backgroundColor: `${col.color}`}} key={col.name}></div>
    ))

    const goToPage = (paletteID)=>{
        console.log('called?')
        history.push(`/palette/${paletteID}`)
    }

    return (
        <div className={classes.root} onClick={()=>{goToPage(id)} }>
            <div className={classes.colors}>{miniBoxes}</div>
            <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>-{emoji}</span></h5>
        </div>
    )
}



export default withStyles(styles)(MiniPalette); // HOC