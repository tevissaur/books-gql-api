const { Book, User } = require('../models')

const resolvers = {
    Query: {
        users: async (parent, args) => {
            return await User.find({})
        }
    },
    Mutation: {
        createUser: async (parent, args) => {
            return await User.create(args)
        }
    }
}

module.exports = resolvers