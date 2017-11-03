const passport = require('passport')

module.exports = app => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }))
    app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/l' }), (req, res) => {
        res.redirect('https://salty-sands-12333.herokuapp.com/')
        res.send( req.user)
    })
    app.get('/api/logout', (req, res) => {
        req.logout()
        res.redirect('/')
    })
    app.get('/api/current_user', (req, res) => {
        res.json({user: req.user})
    })
}

