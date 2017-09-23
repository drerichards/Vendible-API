import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchProducts } from '../actions/index'
import { Link } from 'react-router-dom'
import './css/Departments.css'

class Departments extends Component {
    render() {
        const depts = this.props.departments.map((dept, index) =>
            <li key={index} className="card" onClick={() => this.props.fetchProducts(dept.dept)}>
                <img className="card-img-top cardImg" src={dept.img} alt={dept.dept} />
                <div className="card-block"><h2 className="card-title">{dept.dept}</h2></div>
            </li>)

        return (
            <div className="container deptContainer">
                <h1>Departments</h1>
                <ul>
                    <Link to='/product_display'>
                        {depts}
                    </Link>
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { departments: state.departments }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchProducts }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Departments)