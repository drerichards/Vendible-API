import React, {Component} from 'react'
import {Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../actions'
import createBrowserHistory from 'history/createBrowserHistory'

import NavBar from './NavBar'
import Landing from './Landing'
import AccountSignup from './Account_SignUp'
import Departments from './Departments'
import ProductDisplay from './Product_Display'
import ShoppingCart from './Shopping_Cart'
const history = createBrowserHistory()

class App extends Component {
    componentDidMount() {
        this.props.fetchUser()
    }
    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                        <NavBar/>
                        <Route exact path='/' component={Landing}/>
                        <Route path='/signup' component={AccountSignup}/>
                        <Route path='/departments' component={Departments}/>
                        <Route path='/product_display' component={ProductDisplay}/>
                        <Route path='/shopping_cart' component={ShoppingCart}/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default connect(null, actions)(App)