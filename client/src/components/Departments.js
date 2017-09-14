import React, {Component} from 'react'
import './css/Departments.css'

export default class Departments extends Component {
    render() {
        const deptNames = ['Apparel', 'Electronics', 'Homegoods']
        const depts = deptNames.map((dept, index) => <a href="/product_display">
            <li key={index}>{dept}</li>
        </a>)

        return (
            <div className="container bodyContainer deptContainer">
                <h1>Departments</h1>
                <ul>
                    {depts}
                </ul>
            </div>
        )
    }
}