import User from "../entities/User"

const fetchUsers = () => {
    const url = "https://randomuser.me/api/?results=15"

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let myUserList = data.results.map(user => new User(user));
            return myUserList
        })
}

export { fetchUsers } 