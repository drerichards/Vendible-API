const passport = require('passport')

module.exports = app => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }))
    app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/l' }), (req, res) => {
        res.redirect('https://salty-sands-12333.herokuapp.com/')
    })
    app.get('/api/logout', (req, res) => {
        req.logout()
        res.redirect('/')
    })
    app.get('/api/current_user', (req, res) => {
        res.send(req.user)
    })
}

