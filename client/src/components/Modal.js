import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './css/Modal.css'

export default class Modal extends Component {
    componentDidMount() {
        this.modalTarget = document.createElement('div')
        this.modalTarget.className = 'modal'
        document
            .body
            .appendChild(this.modalTarget)
        this._render()
    }

    componentWIllMount() {
        this._render()
    }

    componentWIllUnmount() {
        ReactDOM.unmountComponentAtNode(this.modalTarget)
        document.body.removeChild(this.modalTarget)
    }

    _render() {
        ReactDOM.render(
            <div>{this.props.children}</div>, this.modalTarget)
    }
    render() {
        return (
          <noscript></noscript>
        )
    }
}