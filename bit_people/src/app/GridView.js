import React from "react"
import GridItem from "./GridItem"

const GridView = (props) => {
    return (

        <div class="col s4 m3">
            <GridItem user={props.user} />
        </div>
    )
}


export default GridView