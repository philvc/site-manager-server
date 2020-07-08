const { gql } = require('apollo-server')

// modules
const { GraphQLScalarType } = require('graphql')


// resolvers
const { UserResolvers } = require('./schemas/user/index')
const { dagRapportResolvers } = require('./schemas/dagRapport')

const resolvers = {
    Query: {
        user: UserResolvers.getUser,
        dagRapports: dagRapportResolvers.getDagRapports,
        dagRapportByDate: dagRapportResolvers.getDagRapportByDate,
        dagRapportPdf: dagRapportResolvers.getDagRapportPdf,
    },
    Mutation: {
        createDagRapport: dagRapportResolvers.createDagRapport,
        updateDagRapport: dagRapportResolvers.updateDagRapport,
    },
    StringOrIntOrBoolean: new GraphQLScalarType({
        name: "StringOrIntOrBoolean",
        description: "A String or an Int or a Boolean union type",
        serialize(value) {
            if (typeof value !== "string" && typeof value !== "number" && typeof value !== "boolean") {
                throw new Error("Value must be either a String or an Int or a Bool");
            }

            if (typeof value === "number" && !Number.isInteger(value)) {
                throw new Error("Number value must be an Int");
            }

            return value;
        },
        parseValue(value) {
            if (typeof value !== "string" && typeof value !== "number" && typeof value !== "boolean") {
                throw new Error("Value must be either a String or an Int or a Bool");
            }

            if (typeof value === "number" && !Number.isInteger(value)) {
                throw new Error("Number value must be an Int");
            }

            return value;
        },
        parseLiteral(ast) {

            // Kinds: http://facebook.github.io/graphql/June2018/#sec-Type-Kinds
            // ast.value is always a string
            switch (ast.kind) {
                case Kind.INT: return parseInt(ast.value, 10);
                case Kind.STRING: return ast.value;
                case Kind.BOOLEAN: return ast.value
                default:
                    throw new Error("Value must be either a String or an Int or a Bool");
            }
        }
    }),
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        parseValue(value) {
            return new Date(value); // value from the client
        },
        serialize(value) {
            return value.getTime(); // value sent to the client
        },
        parseLiteral(ast) {
            if (ast.kind === Kind.INT) {
                return new Date(+ast.value) // ast value is always in string format
            }
            return null;
        },
    }),
}
// module.exports.typeDefs = typeDefs
module.exports = resolvers