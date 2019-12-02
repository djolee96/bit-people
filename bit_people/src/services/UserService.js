import User from "../entities/User"

let fetchUsers = () => {
    const url = "https://randomuser.me/api/?results=8"
    const state = JSON.parse(localStorage.getItem("previous"))

    return state ? (new Promise((resolve, reject) => resolve(JSON.parse(localStorage.getItem("users")).map(user => new User(user))))) :
        fetch(url)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem("time", JSON.stringify(new Date()))
                let myUserList = data.results.map(user => new User(user));
                localStorage.setItem("users", JSON.stringify(data.results))
                localStorage.setItem("previous", "true")
                return myUserList
            })
}

export { fetchUsers } 