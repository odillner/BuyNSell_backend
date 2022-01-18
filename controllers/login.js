const bcrypt = require('bcrypt')

const User = require('../models/user')
const tokenHelper = require('../utils/tokenHelper')

module.exports = {
    auth: async (req, res, next) => {
        try {
            const body = req.body

            const user = await User.findOne({username: body.username})

            if(!user){
                let err = new Error('Incorrect username')
                err.name = 'AuthenticationError'
                throw err
            }

            const passwordCorrect = user === null
                ? false
                : await bcrypt.compare(body.password, user.passwordHash)

            if (!passwordCorrect) {
                let err = new Error('Incorrect password')
                err.name = 'AuthenticationError'
                throw err
            }

            const userForToken = {
                username: user.username,
                id: user._id,
            }

            const token = tokenHelper.sign(userForToken)

            res
                .status(200)
                .send({token, user})

        } catch (err) {
            next(err)
        }
    }
}