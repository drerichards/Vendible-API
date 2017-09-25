import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './css/Modal.css'
import { connect } from 'react-redux'
import { hideModal } from '../actions/index'

class Modal extends Component {
    componentDidMount() {
        this.modalTarget = document.createElement('div')
        document.body.appendChild(this.modalTarget)
    }

    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(this.modalTarget)
        document.body.removeChild(this.modalTarget)
    }

    render() {
        const item = this.props.modalInfo[0]
        let title, img, details, price
        if(item !== undefined){
            title = <h3>{item[1]}</h3>
            img = <img src={item[0]} alt={item[1]} />
            details = <p><strong>Item Details:</strong> {item[3]}</p>
            price = <h5>{item[2]}</h5>
        }

        return (
            <div className='modal' style={{ 'display': (this.props.modal) ? 'block' : 'none' }}>
                <div className='close' onClick={() => { this.props.dispatch(hideModal()) }}></div>
                {title}{img}{details}{price}
                <button className='btn btn-success'>Add to Bag</button>
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
    