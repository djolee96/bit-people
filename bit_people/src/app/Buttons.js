import React from "react"

const Buttons = (props) => {
    const iconName = props.isGrid
        ? "list"
        : "view_module";

    return (
        <div>
            <i class="material-icons" onClick={props.onRefresh}>refresh</i>
            <i class="material-icons " onClick={props.onChangeLayout}>{iconName}</i>
        </div>
    )
}
export default Buttons 