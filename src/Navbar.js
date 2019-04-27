import React, {useState} from "react";
import {Select, MenuItem, Snackbar, IconButton, InputLabel} from '@material-ui/core';
// import {CloseIcon} from '@material-ui/icons';
import CloseIcon from '@material-ui/icons/Close';
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import "./Navbar.css";


const Navbar = (props)=>{
    const {level, changeLevel, changeFormatUp} = props;

    // states
    const [format, setFormat] = useState("hex");
    const [open, setOpen] = useState(false);
   

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
          setOpen(true);
          changeFormatUp(e.target.value)
      }
      const closeSnackbar = ()=>{
          setOpen(false);
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
            <div className="select-container">
                <Select value={format} onChange={changeFormat} style={{width: "auto"}}>
                
                    <MenuItem value="hex">HEX - #777777</MenuItem>
                    <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
                    <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1)</MenuItem>
                </Select>
            </div>
            <Snackbar anchorOrigin={{ vertical: "bottom", horizontal:"left" }} open={open} 
                      autoHideDuration="3000" ContentProps={{'aria-describedby': 'message-id'}}
                      message={<span id="message-id">format changed to {format.toLocaleUpperCase() } </span>}
                      action={[
                          <IconButton onClick={closeSnackbar} color="inherit">
                              <CloseIcon/>
                          </IconButton>
                      ]}
            />
        </header>
    )
}




export default Navbar;