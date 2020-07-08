const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        user: User,
        dagRapports: [DagRapport]
        dagRapportByDate(input: DagRapportByDateInput): [DagRapport]
        dagRapportPdf(input: DagRapportPdfInput): String
    }

    type Mutation {
        createDagRapport(input: CreateDagRapportInput): DagRapport
        updateDagRapport(input: updateDagRapportInput): DagRapport
    }

    type User {
        id: ID!,
        email: String
    }

    type DagRapport {
        id: ID!,
        fieldA: String,
        fieldB: String,
        fieldC: String,
        fieldD: String,
        date: String,
        createdAt: Date,
    }

    input CreateDagRapportInput {
        date: String
    }

    input DagRapportByDateInput{
        date: String
    }

    input updateDagRapportInput{
        id: String
        field: String,
        data: StringOrIntOrBoolean,
    }

    input DagRapportPdfInput{
        id: String
    }

    scalar Date
    scalar StringOrIntOrBoolean 
`

module.exports = typeDefs;