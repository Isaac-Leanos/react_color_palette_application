import React, {useState} from "react";
import {Select, MenuItem} from '@material-ui/core';
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import "./Navbar.css";


const Navbar = (props)=>{
   
    const [format, setFormat] = useState("HEX")
    const {level, changeLevel, changeFormatUp} = props;

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

      const changeFormat = (e)=>{
          setFormat(e.target.value);
          changeFormatUp(e.target.value)
      }

    return (
        <header className="navbar">
            <div className="logo">
                <a href="#">React color picker</a>
            </div>
            <div className="slider-container">
                <span>level: {level}</span>
                <div className="slider">
                    <Slider defaultValue={level} min={100} max={900} onAfterChange={changeLevel} step={100} marks={marks} />
                </div>                
            </div>
            <div className="select">
                <Select value={format} onChange={changeFormat}>
                    <MenuItem value="hex">HEX - #777777</MenuItem>
                    <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
                    <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1)</MenuItem>
                </Select>
            </div>
        </header>
    )
}




export default Navbar;