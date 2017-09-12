const mongoose = require('mongoose')
const {Schema} = mongoose
const bcrypt = require('bcryptjs')

const LocalUserSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    current_cart: [],
    past_orders: []    
})
LocalUserSchema.pre('save', function (next) {
    let user = this
    if (user.isModified('password') || user.isNew) {
        bcrypt.hash(user.password, 10, (err, hash) => {
            if (err) {
                return next(err)
            }
            user.password = hash
            next()
        })
    } else {
        return next()
    }
})
LocalUserSchema.methods.comparePassword = function (entryPassword, callback) {
    return bcrypt.compare(entryPassword, this.password, function (err, isMatch) {
        if (err) {
            return callback(err)
        }
        callback(null, isMatch)
    })
}
const LocalUser = mongoose.model('local_users', LocalUserSchema, 'local_users')
module.exports = LocalUser