import React from "react"
import ListView from "./ListView"
import GridView from "./GridView"
import { fetchUsers } from "../services/UserService"
import Buttons from "./Buttons"
import Search from "./Search"
import NoResult from "./NoResult"
import GenderCounter from "./GenderCounter"
import Loader from './Loader';
import TimeAgo from 'react-timeago';
import { fullName } from '../shared/fullName';


class UserPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            isGrid: false,
            query: "",
            loading: false,
            refresh: ""

        }
        this.onRefresh = this.onRefresh.bind(this)
        this.onChangeLayout = this.onChangeLayout.bind(this)
        this.inputText = this.inputText.bind(this)
    }
    componentDidMount() {

        const last = JSON.parse(localStorage.getItem("lastView"))

        last ?
            this.setState({ users: JSON.parse(localStorage.getItem("user")) })
            : (this.setState({ loading: true }, () => {
                fetchUsers()
                    .then((myUserList) => {
                        this.setState({
                            loading: false,
                            users: myUserList,
                        })
                        localStorage.setItem("user", JSON.stringify(myUserList))
                        localStorage.setItem("lastView", JSON.stringify(true))
                    })
            }))
    }

    onRefresh() {
        this.setState({ loading: true }, () => {
            fetchUsers()
                .then((myUserList) => {
                    this.setState({
                        loading: false,
                        users: myUserList,
                        refresh: new Date()
                    })
                    localStorage.setItem("user", JSON.stringify(myUserList))
                    localStorage.setItem("time", JSON.stringify(this.state.refresh))
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


        const searchUsers = users.filter(user => fullName(user.name).includes(query));

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
                <p className="right">Last update: <TimeAgo date={localStorage.getItem("time")} /> </p>
            </div >
        )
    }
}

export default UserPage