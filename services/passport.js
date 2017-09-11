const passport = require('passport'),
    GoogleStrategy = require('passport-google-oauth20').Strategy,
    mongoose = require('mongoose'),
    keys = require('../config/keys'),
    GoogleUser = mongoose.model('google_users')

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    GoogleUser
        .findById(id)
        .then(user => {
            done(null, user)
        })
})

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
}, (accessToken, refreshToken, profile, done) => {
    GoogleUser
        .findOne({googleId: profile.id})
        .then(existingUser => {
            if (existingUser) {
                done(null, existingUser)
            } else {
                new GoogleUser({googleId: profile.id})
                    .save()
                    .then(user => done(null, user))
            }
        })
}))