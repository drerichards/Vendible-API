const passport = require('passport')

module.exports = app => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }))
    app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/l', session: true}), (req, res) => {
        res.redirect(`https://dry-oasis-35581.herokuapp.com/?${req.user.email`)
    })
    app.get('/api/logout', (req, res) => {
        req.logout()
        res.redirect('https://dry-oasis-35581.herokuapp.com/')
    })
    app.get('/api/current_user',  (req, res) => {
        res.json({msg: 'yup', user: req.user.passport, t: '3'})
    })
}
