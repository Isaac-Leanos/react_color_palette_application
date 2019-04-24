import React from "react";
import "./ColorBox.css";
import {CopyToClipboard} from "react-copy-to-clipboard"; // copy color hexcode to clipboard


const ColorBox = ({name, background})=>{
    return (
        <CopyToClipboard text={background}>
            <div style={{background: background}} className="color-box">
                <div className="copy-container">
                    <div className="box-content">
                        <span>{name}</span>
                    </div>
                    <button className="copy-button">Copy</button>
                </div>
                <span className="see-more">More</span>
            </div>
        </CopyToClipboard>
    )
}



export default ColorBox;