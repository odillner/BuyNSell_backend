const User = require('../models/user')
const tokenHelper = require('./tokenHelper')

/* Middleware used for user authorization */

module.exports = async (req, res, next) => {
    const token = tokenHelper.extract(req)

    if (token && token !== 'undefined') {
        const decodedToken = tokenHelper.decode(token)
        req.authUser = await User.findById(decodedToken.id)
    }

    next()
}