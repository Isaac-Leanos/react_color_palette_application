import React, {useState} from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import {Link} from "react-router-dom"



const SingleColorPalette = (props)=>{
    const {paletteName, emoji, colors} = props.singlePalette;  // material-ui-colors/purple
    const name = props.colorName;
    const id = props.paletteId;

    const xtractShades = (palette, name)=>{
      let shades = [];
      for( let key in palette) {
        shades = shades.concat( // method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
          palette[key].filter(i => i.id === name) // returns object {name: purple 500, id:purple, hex: "fffff"}//method creates a new array with all elements that pass the test implemented by the provided function.
          )
      }
      return shades.slice(1);
    }

    const [shades, setShades] = useState(xtractShades(colors, name) );
    const [format, setFormat] = useState("rgb");

    const changeFormat = (val)=>{
      setFormat(val);
    }

    const colorBoxes = shades.map(color=>{
      return <ColorBox key={color.name} background={color[format]} name={color.name} showLink={false} />
    })
    // `color.${value}`
    
    return (
        <div className="single-color-palette palette">
          <Navbar changeFormatUp={changeFormat} showSlider={false}/>
          <div className="palette-colors">{colorBoxes} 
            <div className="go-back color-box">
              <Link className="go-back-a" to={`/palette/${id}`}>GO BACK</Link>
            </div>
          </div>


          <div className="palette-footer">
                {paletteName}
                <span>{emoji}</span>
          </div>
        </div>
    )
}




export default SingleColorPalette;