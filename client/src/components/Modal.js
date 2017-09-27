import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { hideModal, addToCart } from '../actions/index'
import './css/Modal.css'
import './css/snackbar.css'

class Modal extends Component {
    componentDidMount() {
        this.modalTarget = document.createElement('div')
        document.body.appendChild(this.modalTarget)
    }

    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(this.modalTarget)
        document.body.removeChild(this.modalTarget)
    }

    showSnackbar() {
        var sbar = document.getElementById("snackbar")
        sbar.className = "show"
        setTimeout(function () { sbar.className = sbar.className.replace("show", ""); }, 3000)
    }

    clickAddItem() {
        this.showSnackbar()
        this.props.dispatch(addToCart(this.props.modalInfo[0]))
    }

    render() {
        let output
        const item = this.props.modalInfo[0]
        if (item !== undefined) {
            var sbarItem = item[1]
            output =
                <div>
                    <h3>{item[1]}</h3>
                    <img style={{ 'width': '40%' }} src={item[0]} alt={item[1]} />
                    <p><strong>Item Details:</strong> {item[3]}</p>
                    <h5>{item[2]}</h5>
                    <button className='btn btn-success' onClick={() => this.clickAddItem()}>Add to Bag</button>
                </div>

        }
        return (
            <div className='modal' style={{ 'display': (this.props.modal) ? 'block' : 'none' }}>
                <div className='close' onClick={() => { this.props.dispatch(hideModal()) }}></div>
                {output}
                <div id="snackbar"><strong className="sbarColor">{sbarItem}</strong> added to cart!</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        modal: state.modal[0],
        modalInfo: [state.modal[1]]
    }
}
export default connect(mapStateToProps)(Modal)
