const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        user: User,
    }

    type User {
        email: String
    }
`

module.exports = typeDefs;