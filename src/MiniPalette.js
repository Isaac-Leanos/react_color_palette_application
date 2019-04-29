import React from "react";

import { withStyles} from "@material-ui/styles";

const styles = {
    main: {
        background: "pink"
    }
}


const MiniPalette = ({classes})=>{
    return (
        <div className={classes.main}>ok</div>
    )
}



export default withStyles(styles)(MiniPalette); // HOC