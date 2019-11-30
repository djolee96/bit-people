import React from "react"
import ListView from "./ListView"
import GridView from "./GridView"
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
                <ul class="collection myItem">
                    {this.state.users.map(user => <ListView user={user} />)}
                </ul>
                <div class="row">
                    {this.state.users.map(user => <GridView user={user} />)}
                </div>
            </div >
        )
    }
}

export default UserPage