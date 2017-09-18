const LocalUser = require('../models/LocalUser'),
    bodyParser = require('body-parser'),
    urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = app => {
    app.post('/user/signup', urlencodedParser, (req, res) => {
        let first_name = req.body.first_name
        let last_name = req.body.last_name
        let email = req.body.email
        let password = req.body.password
        LocalUser.findOne({
            'email': email
        }, (err, user) => {
            if (err) {
                throw err
                res.status(500).send('Internal Server Error')
            }
            if (user) {
                res.status(400).send('Email Address already exists in our system')
            } else {
                let newUser = new LocalUser()
                newUser.first_name = first_name
                newUser.last_name = last_name
                newUser.email = email
                newUser.password = password
                newUser.save((err) => {
                    if (err) {
                        throw err
                        res.status(500).send('Internal Server Error')
                    } else
                        res.status(200)
                        res.redirect('/')                        
                })
            }
        })
    })

    app.post('/user/login', urlencodedParser, (req, res) => {
        let email = req.body.email
        let password = req.body.password
        LocalUser.findOne({
            'email': email
        }, (err, user) => {
            if (err) {
                throw err
                res.status(500).send('Internal Server Error')
            }
            if (!user) {
                res.status(400).send('User Account Not Found')
            } else {
                user.comparePassword(password, (err, isMatch) => {
                    if (err)
                        res.status(500).send('Internal Server Error')
                    if (!isMatch) {
                        res.status(401).send('Invalid Password')
                    }
                    if (isMatch) {
                        res.status(200)
                        res.redirect('/')
                    }
                })
            }
        })
    })
}
