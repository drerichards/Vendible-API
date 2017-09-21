import React, { Component } from 'react'
import { connect } from 'react-redux'
import './css/Product_Display.css'

class ProductDisplay extends Component {
    render() {
        const elemArr = []
        let list
        if (this.props.inventory[0] !== undefined) {
            const inventory = this.props.inventory[0].forEach((el) => {
                el.inventory.forEach((el) => {
                    elemArr.push(el)
                })
            })

            list = elemArr.map((item, i) => {
                console.log(item)
                return (<li key={i}>
                    <img src={item.image} />
                    <h6>{item.title}</h6>
                    <p>${item.price}</p>
                </li>)
            })
        }


        return (
            <div className="container prodContainer">
                <h1>Results</h1>
                <section className="prodDisplay">
                    <ul>
                        {list}
                    </ul>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => ({ inventory: state.inventory })
export default connect(mapStateToProps)(ProductDisplay)