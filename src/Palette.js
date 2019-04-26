import React, {useState} from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";


const Pallete = (props)=>{
    const {colors} = props.palette;
    const [level, setLevel] = useState(500);

    const colorBoxes = colors[level].map(color =>{
        return <ColorBox background={color.hex} name={color.name} />
    })

    const changeLevel = (L)=>{
        console.log(L)
        setLevel(L);
    }

    const marks = {
        100: '',
        200: "",
        300: '',
        400: '',
        500: '',
        600: '',
        700: '',
        800: '',
        900: '',
      };

    return (
        <div className="palette" >
            <Slider defaultValue={level} min={100} max={900} onAfterChange={changeLevel} step={100} marks={marks} />
            <div className="palette-colors">{colorBoxes}</div>
        </div>
    )
}




export default Pallete;