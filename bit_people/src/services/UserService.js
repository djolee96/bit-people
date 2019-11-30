import User from "../entities/User"

let fetchUsers = () => {
    const url = "https://randomuser.me/api/?results=5"
    return (fetch(url)
        .then(response => response.json())
        .then(data => {
            let myUserList = data.results.map(user => new User(user));
            return myUserList
        }))
}

export { fetchUsers } 