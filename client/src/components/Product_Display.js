import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showModal } from '../actions/index'
import Modal from './Modal'
import './css/Product_Display.css'

class ProductDisplay extends Component {
    clickProduct(e) {
        e.preventDefault()
        this.props.dispatch(showModal())
    }

    closeModal(e) {
        e.preventDefault()
        this.setState({ showModal: !this.state.showModal })
    }

    render() {
        const elemArr = []
        let list
        if (this.props.inventory[0] !== undefined) {
            this.props.inventory[0].forEach((el) => {
                el.inventory.forEach((el) => {
                    elemArr.push(el)
                })
            })

            list = elemArr.map((item, i) => {
                return (<li key={i} onClick={this.clickProduct.bind(this)}>
                    <img src={item.image} alt={item.title} />
                    <h6>{item.title}</h6>
                    <p>${item.price.toFixed(2)}</p>
                </li>)
            })
        }

        return (
            <div className="container prodContainer">
                <h1>Results</h1>
                <section className="prodDisplay">
                    <ul>
                        <Modal />
                        {list}
                    </ul>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => ({ inventory: state.inventory })
export default connect(mapStateToProps)(ProductDisplay)