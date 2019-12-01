import React from "react"
import ListView from "./ListView"
import GridView from "./GridView"
import { fetchUsers } from "../services/UserService"
import Buttons from "./Buttons"
import Search from "./Search"
import NoResult from "./NoResult"
import GenderCounter from "./GenderCounter"
import Loader from './Loader';

class UserPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            isGrid: false,
            query: "",
            loading: false
        }
        this.onRefresh = this.onRefresh.bind(this)
        this.onChangeLayout = this.onChangeLayout.bind(this)
        this.inputText = this.inputText.bind(this)
    }
    componentDidMount() {
        this.setState({ loading: true }, () => {
            fetchUsers()
                .then((myUserList) => {
                    this.setState({
                        loading: false,
                        users: myUserList
                    })
                })
        })
    }

    onRefresh() {
        this.setState({ loading: true }, () => {
            fetchUsers()
                .then((myUserList) => {
                    this.setState({
                        loading: false,
                        users: myUserList
                    })
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
        const { users, isGrid, query, loading } = this.state
        let components = []
        let nameForClass = ""
        let iconName = ""

        const searchUsers = users.filter(user => user.fullName().includes(query));

        if (isGrid) {
            iconName = "list"
            nameForClass = "row"
            if (searchUsers.length > 0) {
                components = searchUsers.map(user => <GridView user={user} />)
            }
            else {
                components = (<NoResult />)
            }
        }
        else {
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
                <Buttons iconName={iconName} onRefresh={this.onRefresh} onChangeLayout={this.onChangeLayout} />
                {loading ? <Loader /> : (
                    <div>
                        <Search query={query} inputText={this.inputText} />
                        <GenderCounter user={searchUsers} />
                        <div class={nameForClass}>{components}</div>
                    </div>
                )}
            </div >
        )
    }
}

export default UserPage