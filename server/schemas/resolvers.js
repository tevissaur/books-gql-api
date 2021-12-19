const { Book, User } = require('../models')

const resolvers = {
    Query: {
        users: async (parent, args) => {
            return await User.find({})
        }
    }
}

module.exports = resolvers