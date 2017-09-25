import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { hideModal, addToCart } from '../actions/index'
import './css/Modal.css'

class Modal extends Component {
    componentDidMount() {
        this.modalTarget = document.createElement('div')
        document.body.appendChild(this.modalTarget)
    }

    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(this.modalTarget)
        document.body.removeChild(this.modalTarget)
    }

    clickAddItem(){
        this.props.dispatch(addToCart(this.props.modalInfo[0]))
    }

    render() {
        let output
        if (!this.props.modalInfo[0]) {
            output =
                <div style={{ 'textAlign': 'center' }}>
                <h1 className='modalTitle' style={{ 'margin': '0 0 5%', 'fontSize': '2.5em' }}>Sign Up for Vendible:</h1>
                    <form action="/user/signup" method="POST" className="signupContainer">
                        <div className="form-group">
                            <label htmlFor="first_name">First Name</label>
                            <input type="text" className="form-control" name="first_name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="last_name">Last Name</label>
                            <input type="text" className="form-control" name="last_name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" name="email" aria-describedby="emailHelp" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="password" required />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
        } else {
            const item = this.props.modalInfo[0]
            if (item !== undefined) {
                 output = 
                    <div>
                        <h3>{item[1]}</h3>
                        <img style={{ 'width': '40%' }} src={item[0]} alt={item[1]} />
                        <p><strong>Item Details:</strong> {item[3]}</p>
                        <h5>{item[2]}</h5>
                        <button className='btn btn-success' onClick={this.clickAddItem.bind(this)}>Add to Bag</button>
                    </div>
            }
        }
        return (
            <div className='modal' style={{ 'display': (this.props.modal) ? 'block' : 'none' }}>
                <div className='close' onClick={() => { this.props.dispatch(hideModal()) }}></div>
                {output}
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
