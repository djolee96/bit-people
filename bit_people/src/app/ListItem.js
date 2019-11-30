import React from "react"


const ListItem = (props) => {
    return (
        <li class="collection-item avatar">
            <img src={props.user.photo.medium} alt="" class="circle" />
            <span className="name ">{props.user.fullName()}</span><br />
            <span className="name "> <i className="material-icons">email</i> {props.user.hideEmail()} </span><br />
            <span className="name"><i className="material-icons">cake</i> {props.user.fullBirthday()} </span>
        </li>
    )
}

export default ListItem