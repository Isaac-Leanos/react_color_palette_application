import React, {useState} from "react";
import "./ColorBox.css";
import {CopyToClipboard} from "react-copy-to-clipboard"; // copy color hexcode to clipboard
import {Link} from "react-router-dom"




const ColorBox = ({name, background, moreURL, showLink})=>{ 
    const [copied, setCopied] = useState(false);
    const changeCopyState = ()=>{
        setCopied(true);
        setTimeout(()=>{
            setCopied(false);
        },2000)
    }
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
                        <span>{name}</span>
                    </div>
                    <button className="copy-button">Copy</button>
                </div>
                {showLink && (
                <Link to={moreURL} onClick={e=>e.stopPropagation()}>
                    <span className="see-more">More</span>
                </Link>)}
            </div>
        </CopyToClipboard>
    )
}



export default ColorBox;