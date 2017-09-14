import React, {Component} from 'react'
import './css/NavBar.css'

export default class NavBar extends Component {
    render() {
        return (
            <div className="nav-position">
                <nav className="navbar navbar-expand-lg navbar-light navigation">
                    <a
                        className="navbar-brand"
                        style={{
                        color: '#C2E812'
                    }}
                        href="/">Vendible</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul id="navlink" className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/departments">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Contact</a>
                            </li>
                        </ul>

                        <div
                            className="btn-group"
                            role="group"
                            aria-label="Button group with nested dropdown">
                            <button type="button" className="btn btn-secondary">
                                <a href="/user/signup">Sign Up</a>
                            </button>
                            <button type="button" className="btn btn-secondary">
                                <a href="/user/login">Login</a>
                            </button>
                            <button type="button" className="btn btn-primary">
                                <a href="/auth/google">Google Sign In</a>
                            </button>
                        </div>
                        <a className="shopcart" href="/shopping_cart">
                            <img
                                src="http://icons.iconarchive.com/icons/graphicloads/100-flat/32/shopping-icon.png"
                                alt="cart"/> 0 item(s)</a> 
                    </div>
                </nav>
            </div>
        )
    }
}