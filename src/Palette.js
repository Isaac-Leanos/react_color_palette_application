import React, {useState} from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Navbar from "./Navbar";


const Pallete = (props)=>{
    const {colors, id, emoji, paletteName} = props.palette;

    const [level, setLevel] = useState(500);
    console.log(props.palette);

    const colorBoxes = colors[level].map(color =>{
        return <ColorBox background={color.hex} name={color.name} />
    })

    const changeLevel = (L)=>{
        setLevel(L);
    }
    
    return (
        <div className="palette" >
            <Navbar level={level} changeLevel={changeLevel}></Navbar>
            <div className="palette-colors">{colorBoxes}</div>
        </div>
    )
}




export default Pallete;