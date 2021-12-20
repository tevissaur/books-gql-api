const { Book, User } = require('../models')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        users: async (parent, args) => {
            return await User.find({})
        }
    },
    Mutation: {
        createUser: async (parent, args) => {
            const user = await User.create(args)
            const token = signToken(user)
            return { token, user }
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email })

            if (!user) {
                throw new AuthenticationError('No Profile with that email')
            }

            const correctPw = await user.isCorrectPassword(password)

            if (!correctPw) {
                throw new AuthenticationError('Incorrect password!');
            }
            const token = signToken(user)
        }
    }
}

module.exports = resolvers