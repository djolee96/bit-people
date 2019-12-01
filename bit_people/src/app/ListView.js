import React from "react"
import { hideEmail } from "../shared/hideEmail"
import { fullName } from '../shared/fullName';
import { fullBirthday } from "../shared/fullBirthday"

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
            <span className="name ">{fullName(props.user.name)}</span><br />
            <span className="name"> <i className="material-icons">email</i> {hideEmail(props.user.email)} </span><br />
            <span className="name"><i className="material-icons">cake</i> {fullBirthday(props.user.birthday)} </span>
        </li>
    )
}


export default ListView