import React from "react"

const Buttons = (props) => {
    return (
        <div>
            <i class="material-icons " onClick={props.onRefresh}>refresh</i>
            <i class="material-icons " onClick={props.onChangeLayout}>{props.iconName}</i>
        </div>
    )
}
export default Buttons 