const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Book {
        _id: ID!
        title: String!
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        savedBooks: [Book]
    }

    type Query {
        books: [Book]!
        users: [User]!
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!) : User
    }
`

module.exports = typeDefs