import React from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import "./Navbar.css";


const Navbar = (props)=>{
   
    const {level, changeLevel} = props;

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
        </header>
    )
}




export default Navbar;