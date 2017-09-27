import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hideModal } from '../actions/index'
import Modal from './Modal'
import './css/NavBar.css'
import icon from '../images/shopping-icon.png'

class NavBar extends Component {
    renderContent() {
        switch (!this.props.auth) {
            case null:
                return
            case false:
                return <div onClick={() => this.props.dispatch(hideModal())}>
                    <a className='shopcart' href='/shopping_cart'>
                        <img src={icon} alt='cart' /> {this.props.cart.length} item(s)</a>
                    <p className='userName'>Hello {this.props.auth.first_name}!</p>
                    <button type='button' className='btn btn-secondary'>
                        <a href='/api/logout'>Logout</a></button>
                </div>
            default:
                return <div>
                    <button type='button' className='btn btn-primary'>
                        <a href='/auth/google'>Google Sign In</a></button>
                </div>
        }
    }
    closeModal(e) {
        e.preventDefault()
        this.setState({ showModal: !this.state.showModal })
    }

    render() {
        return (
            <div className='nav-position'

            >
                <nav className='navbar navbar-expand-lg navbar-light navigation'>
                    <a className='navbar-brand' style={{ color: '#C2E812' }} href='/' onClick={() => this.props.dispatch(hideModal())}>Vendible</a>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-toggle='collapse'
                        data-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul id='navlink' className='navbar-nav mr-auto' onClick={() => this.props.dispatch(hideModal())}>
                            <li className='nav-item active'>
                                <a className='nav-link' href='/'>Home<span className='sr-only'>(current)</span></a></li>
                            <li className='nav-item'><a className='nav-link' href='/'>About</a></li>
                            <li className='nav-item'><a className='nav-link' href='/departments'>Shop</a></li>
                            <li className='nav-item'><a className='nav-link' href='/'>Contact</a></li>
                        </ul>
                        <div className='right'>{this.renderContent()}</div>
                        <Modal />
                    </div>
                </nav>
            </div>
        )
    }
}
const mapStateToProps = state => ({ auth: state.auth, cart: state.cart })
export default connect(mapStateToProps)(NavBar)