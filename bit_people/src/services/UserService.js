import User from "../entities/User"

let fetchUsersUsingCache = () => {
    const cachedApiUsers = JSON.parse(localStorage.getItem("users"))

    if (cachedApiUsers && cachedApiUsers.length) {
        return new Promise((resolve) => resolve(cachedApiUsers.map(user => new User(user))));
    }

    return fetchUsers();
}

let fetchUsers = () => {
    return fetch("https://randomuser.me/api/?results=8")
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("time", JSON.stringify(new Date()))
            localStorage.setItem("users", JSON.stringify(data.results))

            return data.results.map(user => new User(user));
        })
}

export { fetchUsers, fetchUsersUsingCache } 