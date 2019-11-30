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
    fullName() {
        const firstName = this.name.first
        const lastName = this.name.last
        return `${firstName} ${lastName}`
    }
    fullBirthday() {
        const birthday = new Date(this.birthday.date)
        return `${(("0" + birthday.getDate()).slice(-2))}.${("0" + (birthday.getMonth() + 1)).slice(-2)}.${birthday.getFullYear()}`
    }
}


export default User