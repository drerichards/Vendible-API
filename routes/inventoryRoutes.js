const Inventory = require('../models/inventoryModel')
module.exports = app => {
    app.get('/apparel/inventory', (req, res) => {
        Inventory
            .findOne({})
            .then(ee => {
                res.json(ee)
            })
            .catch(err => {
                console.error(err)
                res
                    .status(500)
                    .json({message: 'Internal server error'})
            })
    })
}