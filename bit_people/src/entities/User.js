class User {
    constructor(data) {
        this.gender = data.gender // "male"/"female"
        this.name = data.name // object {title,first,last}
        this.birthday = data.dob // object {date,age}
        this.photo = data.picture // object {large,medium,thumbnail}
        this.email = data.email // ""
        this.id = data.login.uuid //"    " id of user
    }

    fullName() {
        const firstName = this.name.first
        const lastName = this.name.last
        return `${firstName} ${lastName}`
    }

    hideEmail() {
        const [username, domain] = this.email.split("@")
        const firstTwoLetters = username.slice(0, 2)
        const lastTwoLetters = username.slice(username.length - 3, username.length - 1)
        return `${firstTwoLetters}...${lastTwoLetters}@${domain}`
    }

    fullBirthday() {
        const theBirthday = new Date(this.birthday.date)
        return `${(("0" + theBirthday.getDate()).slice(-2))}.${("0" + (theBirthday.getMonth() + 1)).slice(-2)}.${theBirthday.getFullYear()}`
    }
}

export default User