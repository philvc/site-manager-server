const userResolvers = {
    getUser: () => {
        console.log('get user')
        return {
            email: 'Api connected with client, lets coooodddde'
        }
    }
}

module.exports = userResolvers