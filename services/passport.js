const passport = require('passport'),
    GoogleStrategy = require('passport-google-oauth20').Strategy,
    mongoose = require('mongoose'),
    keys = require('../config/keys'),
    GoogleUser = require('../models/GoogleUser')

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
  },
  (accessToken, refreshToken, profile, cb) => {
    GoogleUser.findOne({googleId: profile.id}, (err, user) => {
      if(user) {
        return cb(null, user)
      } else {
        const entry = new GoogleUser()

        entry.googleId = profile.id,
        entry.first_name = profile.name.givenName,
        entry.last_name = profile.name.familyName,
        entry.email = profile.emails[0].value

        entry.save((err, record) => {
          if(err) {
            res.send(err)
          }

          cb(null, record)
        })
      }
  })
}));
