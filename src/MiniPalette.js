import React from "react";
import {Link} from "react-router-dom";


import { withStyles} from "@material-ui/styles";

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
        // overflow: "hidden"
    },
    colors: {
        background: "grey"
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
    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    }
}


const MiniPalette = ({classes, id, paletteName, emoji, colors})=>{
    return (
        <div className={classes.root}>
            <div className={classes.colors}></div>
            <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
        </div>
    )
}



export default withStyles(styles)(MiniPalette); // HOC