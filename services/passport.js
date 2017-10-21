const passport = require('passport'),
    GoogleStrategy = require('passport-google-oauth20').Strategy,
    mongoose = require('mongoose'),
    keys = require('../config/keys'),
    GoogleUser = mongoose.model('google_users')

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    GoogleUser.findById(id).then(user => {
            done(null, user)
        })
})

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
}, async(accessToken, refreshToken, profile, done) => {
    const existingUser = await GoogleUser.findOne({googleId: profile.id})
    if (existingUser) {
        return done(null, existingUser)
    }
    const user = await new GoogleUser({
        googleId: profile.id, 
        first_name: profile.name.givenName, 
        last_name: profile.name.familyName,
        email: profile.emails[0].value}).save()
    done(null, user)
}))