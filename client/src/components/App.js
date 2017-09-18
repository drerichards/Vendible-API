import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../actions'

import NavBar from './NavBar'
import Landing from './Landing'
import AccountSignup from './Account_SignUp'
import Departments from './Departments'
import ProductDisplay from './Product_Display'
import ShoppingCart from './Shopping_Cart'
import LoginModal from './Login_Modal'
import ProductModal from './Product_Modal'

class App extends Component {
    componentDidMount() {
        this.props.fetchUser()
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <NavBar/>
                        <Route exact path='/' component={Landing}/>
                        <Route path='/signup' component={AccountSignup}/>
                        <Route path='/login' component={LoginModal}/>
                        <Route path='/departments' component={Departments}/>
                        <Route path='/product_display' component={ProductDisplay}/>
                        <Route path='/product_display/detail' component={ProductModal}/>
                        <Route path='/shopping_cart' component={ShoppingCart}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}
export default connect(null, actions)(App)