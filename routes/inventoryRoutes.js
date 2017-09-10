const Inventory = require('../models/Inventory')
module.exports = app => {
    app.get('/apparel/inventory', (req, res) => {
        Inventory
            .findOne({})
            .then(items => {
                res.json(items)
            })
            .catch(err => {
                console.error(err)
                res
                    .status(500)
                    .json({message: 'Internal server error'})
            })
    })
}