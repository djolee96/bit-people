import React from "react"
import { Link } from "react-router-dom"

const Header = (props) => {
    return (

        <nav>
            <div className="nav-wrapper">
                <Link to="/user-page" className="brand-logo center">BitPeople</Link>
                <Link to="/about" className="right about">About</Link>
            </div>
        </nav>

    )
}
export default Header