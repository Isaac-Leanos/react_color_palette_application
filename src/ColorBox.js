import React, {useState} from "react";
import "./ColorBox.css";
import {CopyToClipboard} from "react-copy-to-clipboard"; // copy color hexcode to clipboard
import {Link} from "react-router-dom"
import chroma from 'chroma-js';




const ColorBox = ({name, background, moreURL, showLink})=>{ 
    const [copied, setCopied] = useState(false);
    const changeCopyState = ()=>{
        setCopied(true);
        setTimeout(()=>{
            setCopied(false);
        },2000)
    }

    const isDarkColor = chroma(background).luminance() < 0.6;
    const isLightColor = chroma(background).luminance() >= 0.6;
    return (

        <CopyToClipboard text={background} onCopy={changeCopyState}>

            <div style={{background: background}} className="color-box">
                <div style={{background: background}} className={`copy-overlay ${copied ? "show" : ""}`} /> {/*overlay*/}
                <div className={`copy-message ${copied ? "show" : ""}`}>
                    <h1>COPIED!</h1>
                    <p style={{paddingLeft: "26px"}}>{background}</p>
                </div>
                <div className="copy-container"> 
                    <div className="box-content">
                        <span className={isDarkColor && "light-text"} >{name}</span>
                    </div>
                    <button className={`copy-button ${isLightColor && "dark-text"}`}>Copy</button>
                </div>
                {showLink && (
                <Link to={moreURL} onClick={e=>e.stopPropagation()}>
                    <span className={`see-more ${isLightColor && "dark-text"}`}>MORE</span>
                </Link>)}
            </div>

        </CopyToClipboard>
    )
}



export default ColorBox;