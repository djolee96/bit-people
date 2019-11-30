import React from "react"
import ListView from "./ListView"
import { fetchUsers } from "../services/UserService"

class UserPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }
    componentDidMount() {
        fetchUsers()
            .then((myUserList) => {
                this.setState({
                    users: myUserList
                })
            })
    }

    render() {
        return (
            <div>
                {this.state.users.map(user => <ListView user={user} />)}
            </div >
        )
    }
}

export default UserPage