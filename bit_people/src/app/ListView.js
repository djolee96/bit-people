import React from "react"
import ListItem from "./ListItem"

const ListView = (props) => {
    return (
        <ul class="collection myItem">
            <ListItem user={props.user} />
        </ul>
    )
}


export default ListView