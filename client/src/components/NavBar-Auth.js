import React, {Component} from 'react'
import './css/NavBar.css'

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav
                    role="navigation"
                    className="navbar navbar-expand-lg navbar-light navigation">
                    <a
                        className="navbar-brand"
                        style={{
                        color: '#C2E812'
                    }}
                        href="#">Vendible</a>
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
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/departments">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>

                        <div
                            className="btn-group"
                            role="group"
                            aria-label="Button group with nested dropdown">
                            <button type="button" className="btn btn-secondary">
                                <a href="/user/account_signup">Logout</a>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default NavBar