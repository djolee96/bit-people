const hideEmail = (email) => {
    const [username, domain] = email.split("@")
    const firstTwoLetters = username.slice(0, 2)
    const lastTwoLetters = username.slice(username.length - 3, username.length - 1)
    return `${firstTwoLetters}...${lastTwoLetters}@${domain}`
}

export { hideEmail }