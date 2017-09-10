const express = require('express'),
    cors = require('cors'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    keys = require('./config/keys'), 
    // {CLIENT_ORIGIN} = require('./config'),
    PORT = process.env.PORT || 3000

mongoose.Promise = global.Promise
mongoose.connect('mongodb://drerichards:test@ds129024.mlab.com:29024/vendible_inventory')
console.log('connect', keys.mongoURI)
mongoose
    .connection
    .once('open', () => {
        console.log('Mongo Connection Opened!')
    })
    .on('error', () => console.warn('Warning', error))

app.use(bodyParser.json())
// app.use(cors({origin: CLIENT_ORIGIN}))
app.get('/api/*', (req, res) => {
    res.json({ok: true})
})

require('./routes/inventoryRoutes')(app)
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

module.exports = {
    app
}
