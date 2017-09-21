const {Apparel, Electronics, Homegoods} = require('../models/Inventory')
module.exports = app => {
    app.get('/inventory/apparel', (req, res) => {
        Apparel.find().then(items => {
                res.json(items)
            }).catch(err => {
                console.error(err)
                res.status(500).json({message: 'Internal server error'})
            })
    }),
    app.get('/inventory/electronics', (req, res) => {
        Electronics.find().then(items => {
                res.json(items)
            }).catch(err => {
                console.error(err)
                res.status(500).json({message: 'Internal server error'})
            })
    }),
    app.get('/inventory/homegoods', (req, res) => {
        Homegoods.find().then(items => {
                res.json(items)
            }).catch(err => {
                console.error(err)
                res.status(500).json({message: 'Internal server error'})
            })
    })
}