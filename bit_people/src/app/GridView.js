import React from "react"


const GridView = (props) => {
    let clName = ''
    if (props.user.gender === "female") {
        clName = "red lighten-5"
    }
    else {
        clName = ""
    }
    return (

        <div class="col s4 m3">
            <div class={"card " + clName}>
                <div class="card-image ">
                    <img src={props.user.photo.large} alt="" />
                    <span class="card-title">{props.user.name.first}</span>
                </div>
                <div class="card-content">
                    <p><i className="material-icons">email</i> {props.user.hideEmail()} </p>
                    <p><i className="material-icons">cake</i> {props.user.fullBirthday()}</p>
                </div>
            </div>
        </div>
    )
}


export default GridView