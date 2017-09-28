import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeFromCart } from '../actions/index'
import Payment from './Payment'
import './css/Shopping_Cart.css'
import icon from '../images/remove.png'

class ShoppingCart extends Component {
    clickRemove(index) {
        this.props.dispatch(removeFromCart(index))
    }

    render() {
        const cartItems = this.props.cart
        let total
        if (!total) { total = 0 }
        const cartDisplay = cartItems.map((item, index) => <li key={index}>
            <img className='cartPic' src={item[0]} alt={item[1]} />
            <h6><strong>{item[1]}</strong></h6>
            <p>${item[2].substr(1)}</p>
            <span className='removeItem'>
                <button className='btn btn-warning' onClick={() => this.clickRemove(index)}><img src={icon} alt='Remove Item' /> Remove</button></span>
        </li>)
        let items = []
        for (let i = 0; i < cartItems.length; i++) {
            items.push(parseFloat(cartItems[i][2].substr(1)))
            total = items.reduce((a, b) => a + b)
            total = total.toFixed(2)
        }

        return (
            <div className='container bodyContainer cartContainer'>
                <h1>Shopping Cart: {cartItems.length} item(s)</h1>
                <ul>
                    {cartDisplay}
                </ul>
                <div>
                    <Payment total={total} />
                    <h5>Subtotal: <strong>${total}</strong></h5>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({ cart: state.cart })
export default connect(mapStateToProps)(ShoppingCart)