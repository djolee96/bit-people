import React from "react"

const GridItem = (props) => {
    return (

        <div class="card">
            <div class="card-image">
                <img src={props.user.photo.large} alt="" />
                <span class="card-title">{props.user.name.first}</span>
            </div>
            <div class="card-content">
                <p><i className="material-icons">email</i> {props.user.hideEmail()} </p>
                <p><i className="material-icons">cake</i> {props.user.fullBirthday()}</p>
            </div>
        </div>

    )
}

export default GridItem