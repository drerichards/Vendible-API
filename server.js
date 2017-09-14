const express = require('express'),
    cors = require('cors'),
    app = express(),
    mongoose = require('mongoose'),
    cookieSession = require('cookie-session'),
    passport = require('passport'),
    bodyParser = require('body-parser'),
    keys = require('./config/keys'),
    PORT = process.env.PORT || 5000

require('./models/GoogleUser')
require('./services/passport')

// app.use(express.static('public'))

mongoose.Promise = global.Promise
mongoose.connect(keys.mongoURI)
mongoose
    .connection
    .once('open', () => {
        console.log('Mongo Connection Opened!')
    })
    .on('error', () => console.warn('Warning', error))
app.use(bodyParser.json())

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}))
app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req, res) => {
    res.redirect('/index.html')
})

require('./routes/authRoutes')(app)
require('./routes/localUserRoutes')(app)
require('./routes/inventoryRoutes')(app)
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

module.exports = {
    app
}