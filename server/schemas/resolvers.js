const { Book, User } = require('../models')

const resolvers = {
    Query: {
        books: async (parent, args) => {
            return await Book.find({})
        },
        users: async (parent, args) => {
            return await User.find({})
        }
    }
}

module.exports = resolvers