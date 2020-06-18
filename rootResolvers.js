const { gql } = require('apollo-server')
const { UserResolvers } = require('./schemas/user/index')


const resolvers = {
    Query: {
        user: UserResolvers.getUser,
    }
}
// module.exports.typeDefs = typeDefs
module.exports = resolvers