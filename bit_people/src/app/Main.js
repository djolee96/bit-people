import React from "react"
import UserPage from "./UserPage"
import About from "./About"
import { Switch, Route } from "react-router-dom"
const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={UserPage} />
                <Route exact path="/user-page" component={UserPage} />
                <Route exact path="/about" component={About} />
            </Switch>
        </main>
    )
}

export default Main