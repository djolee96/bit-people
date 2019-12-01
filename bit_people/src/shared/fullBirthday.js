const fullBirthday = (birthday) => {
    const theBirthday = new Date(birthday.date)
    return `${(("0" + theBirthday.getDate()).slice(-2))}.${("0" + (theBirthday.getMonth() + 1)).slice(-2)}.${theBirthday.getFullYear()}`
}

export { fullBirthday }
