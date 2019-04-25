


import chroma from "chroma-js";
// import seedColors from "./src/seedColors"; 

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

// mutate colors 
export const generatePalette = (initial)=>{
    let newPalette = {
        paletteName: initial.paletteName,
        id: initial.id,
        emoji: initial.emoji,
        colors: {}
    };

    // {
    //  50: [], {name, id, rgb}, {name, id, rgb} ... 20 all light
    //  100: [],
    //  200: [],
    //  300 [] {name, id, rgb}, {name, id, rgb} ... 20 all dark
    // }

    levels.forEach((level)=>{
        newPalette.colors[level] = [];
    });

    initial.colors.forEach((color)=>{ //20 color objects {name:red, color:#886888}
        const scale = generateScale(color.color, 10).reverse(); // return [] of 10 hex color (hue) spectrum in reverse order from light to darkest
        scale.forEach((s, i)=>{
            newPalette.colors[levels[i] ].push({ // levels[0-10 lightest -> darkest]
                name: `${color.name} ${levels[i]}`, // red 50
                id: color.name.toLowerCase().replace(/ /g, "-"), // replace space globally with a dash
                hex: s,
                rgb: chroma(color).css(), // .css returns rgb value 
                rgba: chroma(s).css().replace("rgb", "rgba").replace(")", ",1.0)") // .css returns rgb value 
            })
        });
    });

    return newPalette;

}
// return a range for which colors we want to extract from
const getRange = (hexColor)=>{
    return [
        chroma(hexColor).darken(1.4).hex(), // dark version
        hexColor,
        "#fff" // light version (white)
    ]
}
// spectrum of 10 colors from our range
const generateScale = (hexColor, numberOfColors)=>{
    return chroma.scale(getRange(hexColor) ) // 
                 .mode("lab") // lightness a,b
                 .colors(numberOfColors);
};


