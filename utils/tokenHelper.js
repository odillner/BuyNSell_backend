const jwt = require('jsonwebtoken')
const {SECRET} = require('./config')

/* Helper module that handles JavaWebToken */

module.exports = {
    extract: (req) => {
        const auth = req.get('authorization')
        if (auth && auth.toLowerCase().startsWith('bearer ')) {
            return auth.substring(7)
        } else {
            return null
        }
    },

    decode: (token) => {
        if (token) {
            return jwt.verify(token, SECRET)
        } else {
            return null
        }
    },

    sign: (user) => {
        return jwt.sign(user, SECRET)
    }
}