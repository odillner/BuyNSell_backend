//TODO: validation

const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        minlength: 6,
        maxlength: 20,
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    name: {
        type: String
    },
    address: {
        type: String
    },
    passwordHash: {
        type: String,
    },
    listings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Listing'
        }
    ],
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.passwordHash
    }
})


module.exports = mongoose.model('User', userSchema)






