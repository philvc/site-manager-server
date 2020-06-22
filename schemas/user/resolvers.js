const userResolvers = {
    getUser: () => {
        console.log('get user')
        return {
            email: 'Hello thomas'
        }
    }
}

module.exports = userResolvers