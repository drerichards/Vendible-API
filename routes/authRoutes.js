const passport = require('passport')

module.exports = app => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }))
    app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/l' }), (req, res) => {
        // res.redirect('https://vendible.netlify.com')
        res.redirect(`/post=${req.user.first_name}`)
        // res.redirect('/')
        // console.log(req.user)
        // res.send( req.user)
    })
    app.get('/api/logout', (req, res) => {
        req.logout()
        // res.redirect('/')https://vendible.netlify.com
        res.redirect('https://vendible.netlify.com')
    })
    app.get('/api/current_user', (req, res) => {
        // res.json({user: req.user})
        res.send(req.user)
    })
}

