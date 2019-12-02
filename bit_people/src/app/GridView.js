import React from "react"

const GridItem = ({ user }) => {
    let clName = ''
    if (user.gender === "female") {
        clName = "red lighten-5"
    }
    else {
        clName = ""
    }

    return (

        <div class="col s4 m3">
            <div class={"card " + clName}>
                <div class="card-image ">
                    <img src={user.photo.large} alt="" />
                    <span class="card-title">{user.name.first}</span>
                </div>
                <div class="card-content">
                    <p><i className="material-icons">email</i> {user.hideEmail()} </p>
                    <p><i className="material-icons">cake</i> {user.fullBirthday()}</p>
                </div>
            </div>
        </div>
    );
}

const GridView = (props) => {
    return (
        <div class="row">
            {props.users.map(user => <GridItem user={user} />)}
        </div>
    )
}


export default GridView