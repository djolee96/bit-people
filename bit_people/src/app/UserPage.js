import React from "react"
import ListView from "./ListView"
import GridView from "./GridView"
import { fetchUsers, fetchUsersUsingCache } from "../services/UserService"
import Buttons from "./Buttons"
import Search from "./Search"
import NoResult from "./NoResult"
import GenderCounter from "./GenderCounter"
import Loader from './Loader';
import TimeAgo from 'react-timeago';



class UserPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            isGrid: !!JSON.parse(localStorage.getItem("grid-list")),
            query: "",
            loading: true,
        }

        this.onRefresh = this.onRefresh.bind(this)
        this.onChangeLayout = this.onChangeLayout.bind(this)
        this.inputText = this.inputText.bind(this)
    }
    componentDidMount() {
        fetchUsersUsingCache()
            .then((myUserList) => {
                this.setState({
                    loading: false,
                    users: myUserList,
                })
            })
    }

    onRefresh() {
        this.setState({ loading: true })

        fetchUsers()
            .then((myUserList) => {
                this.setState({
                    loading: false,
                    users: myUserList,
                })

            })
    }

    onChangeLayout() {
        this.setState((prevState) => {
            localStorage.setItem("grid-list", !prevState.isGrid);
            return { isGrid: !prevState.isGrid }
        })
    }

    inputText(event) {
        this.setState({ query: event.target.value })
    }

    render() {
        const { users, query, loading, isGrid } = this.state

        if (loading) {
            return <Loader />;
        }

        const searchUsers = users.filter(user => user.fullName().toUpperCase().includes(query.toUpperCase()));

        const UsersLayoutComponent = isGrid
            ? <GridView users={searchUsers} />
            : <ListView users={searchUsers} />;

        return (
            <div>
                <Buttons isGrid={isGrid} onRefresh={this.onRefresh} onChangeLayout={this.onChangeLayout} />
                <div>
                    <Search query={query} inputText={this.inputText} />
                    <GenderCounter user={searchUsers} />

                    {!searchUsers.length
                        ? <NoResult />
                        : UsersLayoutComponent
                    }
                </div>
                <p className="right">Last update: <TimeAgo date={localStorage.getItem("time")} /> </p>
            </div >
        )
    }
}

export default UserPage