import React, {Component} from 'react'
import './css/Shopping_Cart.css'

export default class ShoppingCart extends Component {
    render() {
        const cartItems = [
            {
                image: 'http://www.iconsdb.com/icons/preview/barbie-pink/t-shirt-xxl.png',
                title: 'Pink Shirt',
                price: 12.99
            }, {
                image: 'http://www.iconsdb.com/icons/preview/caribbean-blue/t-shirt-xxl.png',
                title: 'Blue Shirt',
                price: 6.99
            }
        ]
        const cartDisplay = cartItems.map((item, index) => <li key={index}>
            <img src={item.image} alt="shirt"/>
            <h6>{item.title}</h6>
            <p>${item.price}</p>
        </li>)
        let items = []
        var total
        for(let i=0; i < cartItems.length; i++){
            items.push(cartItems[i].price)
            total = items.reduce((a, b) => a + b)
        }
        
        return (
            <div className="container bodyContainer cartContainer">
                <h1>Shopping Cart: {cartItems.length} item(s)</h1>
                <ul>
                    {cartDisplay}
                </ul>
                <div>
                    <button>Checkout</button>
                    <h5>Subtotal: ${total.toFixed(2)}</h5>
                </div>
            </div>
        )
    }
}