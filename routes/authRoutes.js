const passport = require('passport')

module.exports = app => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }))
    app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/l', session: false}), (req, res) => {
        console.log(req.user)

        res.redirect(`https://salty-sands-12333.herokuapp.com/${req.user._id}/${req.user.email}/${req.user.first_name}`)
        console.log(req.user)
        
    })
    app.get('/api/logout', (req, res) => {
        req.logout()
        res.redirect('https://salty-sands-12333.herokuapp.com/')
    })
    app.get('/api/current_user',  (req, res) => {
    })
}
