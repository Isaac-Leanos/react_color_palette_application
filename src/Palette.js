import React from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";


const Pallete = ({colors, emoji, id, paletteName})=>{

    const colorBoxes = colors.map(color =>{
        return <ColorBox background={color.color} name={color.name} />
    })
    return (
        <div className="palette" >
            <div className="palette-colors">{colorBoxes}</div>
        </div>
    )
}




export default Pallete;