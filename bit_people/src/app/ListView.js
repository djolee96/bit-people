import React from "react"
import ListItem from "./ListItem"

const ListView = (props) => {
    return (
        <ListItem user={props.user} />
    )
}


export default ListView