import React, {Component} from 'react'
import { connect } from 'react-redux'
import Payment from './Payment'
import './css/Shopping_Cart.css'
import icon from '../images/remove.png'

class ShoppingCart extends Component {
    render() {
        const cartItems = this.props.cart
        const cartDisplay = cartItems.map((item, index) => <li key={index}>
            <img className="cartPic" src={item[0]} alt={item[1]}/>
            <h6><strong>{item[1]}</strong></h6>
            <p>${item[2].substr(1)}</p>
            <span className="removeItem">
                <button className="btn btn-warning"><img src={icon} alt="Remove Item" /> Remove</button></span>
        </li>)
        let items = []
        let total
        for(let i=0; i < cartItems.length; i++){
            items.push(parseInt(cartItems[i][2].substr(1)), 10)
            total = items.reduce((a, b) => a + b)
            total = total.toFixed(2)
        }
        
        return (
            <div className="container bodyContainer cartContainer">
                <h1>Shopping Cart: {cartItems.length} item(s)</h1>
                <ul>
                    {cartDisplay}
                </ul>
                <div>
                    <Payment total={total}/>
                    <h5>Subtotal: ${total}</h5>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({cart: state.cart })
export default connect(mapStateToProps)(ShoppingCart)