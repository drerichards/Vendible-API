const mongoose = require('mongoose'), {Schema} = mongoose

const GoogleUserSchema = new Schema({
    googleId: {
        type: String
    },
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
    }
})
const GoogleUser = mongoose.model('google_users', GoogleUserSchema, 'google_users')
module.exports = GoogleUser