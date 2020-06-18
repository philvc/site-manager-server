const { gql } = require('apollo-server');

const typeDefs = gql`

    extend type Query {
        user: User
    }

    type User {
        email: String
        firstName: String
        lastName: String
    }
`

module.exports = typeDefs