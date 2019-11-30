class User {
    constructor(data) {
        this.gender = data.gender // "male"/"famale"
        this.name = data.name // object {title,first,last}
        this.birthday = data.dob // object {date,age}
        this.photo = data.picture // object {large,medium,thumbnail}
        this.email = data.email // ""
        this.id = data.login.uuid //"    " id of user

    }
}


export default User