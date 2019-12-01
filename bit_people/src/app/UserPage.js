import React from "react"
import ListView from "./ListView"
import GridView from "./GridView"
import { fetchUsers } from "../services/UserService"
import Buttons from "./Buttons"
import Search from "./Search"
import Load from './Load';
class UserPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            isGrid: false,
            query: "",
            load: true
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

        const searchUsers = this.state.users.filter(user => user.name.first.toUpperCase().includes(this.state.query.toUpperCase()));


        if (this.state.isGrid) {
            iconName = "list"
            nameForClass = "row"
            components = searchUsers.map(user => <GridView user={user} />)
        }
        else {
            iconName = "view_module"
            nameForClass = "collection myItem"
            components = searchUsers.map(user => <ListView user={user} />)
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