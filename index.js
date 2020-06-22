const { ApolloServer, gql } = require('apollo-server')

require('dotenv').config()

const { mongodbConnection } = require('./config');
mongodbConnection();

const typeDefs = require('./rootSchema');
const resolvers = require('./rootResolvers')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    cors: true,
    formatError: (err) => {
        return err;
    },
    context: ({ req, res }) => ({ req, res }),
    playground: true,
    introspection: true,
})

server.listen({ port: process.env.PORT || 4000 }).then(({ url, subscriptionsUrl }) => {
    console.log(`🚀  Server ready at ${url}`);
    console.log(`🚀 Subscription ready at ${subscriptionsUrl}`)

});