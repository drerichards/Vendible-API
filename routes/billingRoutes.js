const keys = require('../config/keys'),
stripe = require('stripe')(keys.stripeSecretKey)

module.exports = app => {
    // app.post('/api/stripe', async(req, res) => {
    //     const charge = await stripe.charges.create({
    //         amount: 0,
    //         currency: 'usd',
    //         description: 'Credit Card Charge',
    //         source: req.body.id
    //     })
    // })
}
