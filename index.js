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


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

mongoose.Promise = global.Promise
mongoose.connect(keys.mongoURI, {useMongoClient: true})
mongoose.connection.once('open', () => {
        console.log('Mongo Connection Opened!')
    }).on('error', (error) => console.warn('Warning', error))

app.use(bodyParser.json())
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}))
app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)
require('./routes/localUserRoutes')(app)
require('./routes/inventoryRoutes')(app)
require('./routes/billingRoutes')(app)
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

module.exports = {app}