import React from "react"
import ListView from "./ListView"
import GridView from "./GridView"
import { fetchUsers } from "../services/UserService"
import Buttons from "./Buttons"

class UserPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            isGrid: false
        }
        this.onRefresh = this.onRefresh.bind(this)
        this.onChangeLayout = this.onChangeLayout.bind(this)
    }
    componentDidMount() {
        fetchUsers()
            .then((myUserList) => {
                this.setState({
                    users: myUserList
                })
            })
    }

    onRefresh() {
        fetchUsers()
            .then((myUserList) => {
                this.setState({
                    users: myUserList
                })
            })
    }
    onChangeLayout() {
        this.setState((prevState) => { return { isGrid: !prevState.isGrid } })
    }
    render() {
        let components = []
        let nameForClass = ""
        let iconName = ""
        if (this.state.isGrid) {
            iconName = "list"
            nameForClass = "row"
            components = this.state.users.map(user => <GridView user={user} />)
        }
        else {
            iconName = "view_module"
            nameForClass = "collection myItem"
            components = this.state.users.map(user => <ListView user={user} />)
        }

        return (
            <div>
                <Buttons iconName={iconName} onRefresh={this.onRefresh} onChangeLayout={this.onChangeLayout} />
                <div>
                    <div class={nameForClass}>
                        {components}
                    </div>
                </div>
            </div>
        )
    }
}

export default UserPage