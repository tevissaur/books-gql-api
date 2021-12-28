const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        me: async (parent, { userId }) => {
            return await User.findById(userId)
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
            return { token, user }
        },
        saveBook: async (parent, { _id, book }) => {
            console.log(book)
            const updatedUser = await User.findByIdAndUpdate(
                _id,
                { $set: { savedBooks: book } }
            )
            console.log(data)
            return updatedUser
        }
    }
}

module.exports = resolvers