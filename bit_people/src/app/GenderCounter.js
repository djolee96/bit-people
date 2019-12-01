import React from "react"

const GenderCounter = (props) => {
    let male = props.user.filter(user => user.gender === "male")
    let female = props.user.filter(user => user.gender === "female")

    return (<p>Male: {male.length} Female: {female.length}</p>)
}

export default GenderCounter