import React, {useState} from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Navbar from "./Navbar";


const Pallete = (props)=>{
    const {colors, id, emoji, paletteName} = props.palette; // muted colors object

    //states
    const [level, setLevel] = useState(500);
    const [format, setFormat] = useState("hex");
    console.log(':)))))',props.palette);

    const colorBoxes = colors[level].map(color =>{
        return <ColorBox key={color.id} background={color[format]} name={color.name} moreURL={`/palette/${id}/${color.id}`} showLink={true}/>
    })

    const changeLevel = (L)=>{
        setLevel(L);
    }
    
    const changeFormat = (val)=>{
        setFormat(val);
    }

    return (
        <div className="palette" >
            <Navbar level={level} changeLevel={changeLevel} changeFormatUp={changeFormat} showSlider={true}/>
            <div className="palette-colors">{colorBoxes}</div>
            <footer className="palette-footer">
                {paletteName}
                <span>{emoji}</span>
            </footer>
        </div>
    )
}




export default Pallete;