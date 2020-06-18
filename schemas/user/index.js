const typeDefs = require('./schema');
const userResolvers = require('./resolvers')


module.exports = {
    userTypes: typeDefs,
    UserResolvers: userResolvers,
}

