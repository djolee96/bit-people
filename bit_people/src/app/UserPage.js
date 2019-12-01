import React from "react"
import ListView from "./ListView"
import GridView from "./GridView"
import { fetchUsers } from "../services/UserService"
import Buttons from "./Buttons"
import Search from "./Search"
import NoResult from "./NoResult"

class UserPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            isGrid: false,
            query: ""
        }
        this.onRefresh = this.onRefresh.bind(this)
        this.onChangeLayout = this.onChangeLayout.bind(this)
        this.inputText = this.inputText.bind(this)
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

    inputText(event) {
        this.setState({ query: event.target.value })
    }

    render() {
        let components = []
        let nameForClass = ""
        let iconName = ""

        const searchUsers = this.state.users.filter(user => user.fullName().includes(this.state.query));

        if (this.state.isGrid) {
            iconName = "list"
            nameForClass = "row"
            if (searchUsers.length > 0) {
                components = searchUsers.map(user => <GridView user={user} />)
            }
            else {
                components = (<NoResult />)
            }
        }
        else if (!this.state.isGrid) {
            iconName = "view_module"

            if (searchUsers.length > 0) {
                nameForClass = "collection myItem"
                components = searchUsers.map(user => <ListView user={user} />)
            }
            else {
                components = (<NoResult />)
            }
        }

        return (
            <div>
                <Search query={this.state.query} inputText={this.inputText} />
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