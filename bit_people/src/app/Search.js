import React from "react"

const Search = (props) => {
    return (
        <input id="searchUsers" type="text" placeholder="Search users" value={props.query} onChange={props.inputText}></input>
    )
}

export default Search