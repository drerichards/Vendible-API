const mongoose = require('mongoose'),
    GoogleUserSchema = new mongoose.Schema({googleId: String}),
    GoogleUser = mongoose.model('google_users', GoogleUserSchema, 'google_users')
module.exports = GoogleUser