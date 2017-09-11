const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')

const ManualUserSchema = new Schema({
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
ManualUserSchema.pre('save', function (next) {
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
ManualUserSchema.methods.comparePassword = function (entryPassword, callback) {
    return bcrypt.compare(entryPassword, this.password, function (err, isMatch) {
        if (err) {
            return callback(err)
        }
        callback(null, isMatch)
    })
}
const ManualUser = mongoose.model('manual_users', ManualUserSchema, 'manual_users')
module.exports = ManualUser