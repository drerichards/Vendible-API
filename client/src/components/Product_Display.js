import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchProductsSuccess } from '../actions/index'
import './css/Product_Display.css'

class ProductDisplay extends Component {
    //    <img src={item.image} alt="shirt" />
    // <h4>{item.title}</h4>
    // <p>${item.price}</p>
    render() {
        // console.log(Object.keys(this.props.inventory))
        const inventory = this.props.inventory
        console.log(inventory)
        // console.log(Object.values(inventory))        
        const productDisplay = inventory.map((item, index) => <li key={index}>{item}</li>)

        return (
            <div className="container prodContainer">
                <h1>Results</h1>
                <section className="prodDisplay">
                    <ul>
                    </ul>
                </section>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { inventory: state.inventory }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchProductsSuccess }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDisplay)