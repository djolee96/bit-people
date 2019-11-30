class User {
    constructor(data) {
        this.gender = data.gender // "male"/"famale"
        this.name = data.name // object {title,first,last}
        this.birthday = data.dob // object {date,age}
        this.photo = data.picture // object {large,medium,thumbnail}
        this.email = data.email // ""
        this.id = data.login.uuid //"    " id of user
    }

    hideEmail() {
        const [username, domain] = this.email.split("@")
        const firstTwoLetters = username.slice(0, 2)
        const lastTwoLetters = username.slice(username.length - 3, username.length - 1)
        return `${firstTwoLetters}...${lastTwoLetters}@${domain}`
    }

}


export default User