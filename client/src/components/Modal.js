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
        return (
            <div className='modal' style={{ 'display': (this.props.modal) ? "block" : "none" }}>
                <h1>Modal</h1>
                <a className="close" onClick={() => { this.props.dispatch(hideModal()) }}></a>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        modal: state.modal
    }
}

export default connect(mapStateToProps)(Modal)
