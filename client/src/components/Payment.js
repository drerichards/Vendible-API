import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'

class Payment extends Component {
    render() {
        const cartTotal = this.props.total,
            payTotal = cartTotal * 100,
            description = `Purchase Total: ${cartTotal}`
        return (
            <StripeCheckout
                name='Vendible'
                description={description}
                amount={payTotal}
                token={token => console.log(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}>
                <button className="btn btn-info">Checkout</button>
                </StripeCheckout>
        )
    }
}
export default Payment