import React from "react";
import "./ColorBox.css";



const ColorBox = ({name, background})=>{
    return (
        <div style={{background: background}} className="color-box">
            <div className="copy-container"></div>
            <div className="box-content">
                <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
            <span>More</span>
        </div>
    )
}




export default ColorBox;