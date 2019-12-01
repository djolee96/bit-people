const fullName = (name) => {
    const firstName = name.first
    const lastName = name.last
    return `${firstName} ${lastName}`
}

export { fullName }