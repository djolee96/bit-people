import React from "react"


const ListView = (props) => {
    let clName = ''
    if (props.user.gender === "female") {
        clName = "red lighten-5"
    }
    else {
        clName = ""
    }

    return (
        <li class={"collection-item avatar " + clName}>
            <img src={props.user.photo.medium} alt="" class="circle" />
            <span className="name ">{props.user.fullName()}</span><br />
            <span className="name "> <i className="material-icons">email</i> {props.user.hideEmail()} </span><br />
            <span className="name"><i className="material-icons">cake</i> {props.user.fullBirthday()} </span>
        </li>
    )
}


export default ListView