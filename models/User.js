const mongoose = require('mongoose'),
    UserSchema = new mongoose.Schema({googleId: String}),
    User = mongoose.model('users', UserSchema, 'users')
module.exports = User