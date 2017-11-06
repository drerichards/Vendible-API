const passport = require('passport')

module.exports = app => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }))
    app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/l', session: false}), (req, res) => {
        res.redirect(`https://vendible.herokuapp.com/${req.user._id}/${req.user.email}`) 
    })
    app.get('/api/logout', (req, res) => {
        req.logout()
        res.redirect('https://vendible.herokuapp.com')
    })
}
