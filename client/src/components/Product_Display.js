import React, {Component} from 'react'
import './css/Product_Display.css'

export default class ProductDisplay extends Component {
    render() {
        const inventory = [
            {
                image: 'http://www.iconsdb.com/icons/preview/soylent-red/t-shirt-xxl.png',
                title: 'Red Shirt',
                description: 'Roof party hell of knausgaard, raclette meggings drinking vinegar vaporware cray',
                price: 14.99
            }, {
                image: 'http://www.iconsdb.com/icons/preview/royal-blue/t-shirt-xxl.png',
                title: 'Royal Blue Shirt',
                description: 'Helvetica deep v locavore pop-up. Butcher vaporware 8-bit banjo chicharrones',
                price: 19.99
            }, {
                image: 'http://www.iconsdb.com/icons/preview/guacamole-green/t-shirt-xxl.png',
                title: 'Green Shirt',
                description: 'aiyaki hashtag vaporware prism, bushwick fam literally knausgaard',
                price: 9.99
            }, {
                image: 'http://www.iconsdb.com/icons/preview/orange/t-shirt-xxl.png',
                title: 'Orange Shirt',
                description: 'Neutra af roof party, drinking vinegar cred blue bottle synth wayfarers wolf hea' +
                        'lth goth',
                price: 22.99
            }, {
                image: 'http://www.iconsdb.com/icons/preview/barbie-pink/t-shirt-xxl.png',
                title: 'Pink Shirt',
                description: 'Williamsburg fashion axe letterpress portland knausgaard trust ',
                price: 12.99
            }, {
                image: 'http://www.iconsdb.com/icons/preview/caribbean-blue/t-shirt-xxl.png',
                title: 'Blue Shirt',
                description: ' Leggings craft beer gochujang salvia. Snackwave swag hot chicken, retro',
                price: 6.99
            }
        ]
        const productDisplay = inventory.map((item, index) => <li key={index}>
            <img src={item.image} alt="shirt"/>
            <h4>{item.title}</h4>
            <p>${item.price}</p>
        </li>)

        return (
            <div className="container prodContainer">
                <h1>{inventory.length} Results</h1>
                <section className="prodDisplay">
                    <ul>
                        {productDisplay}
                    </ul>
                </section>
            </div>
        )
    }
}