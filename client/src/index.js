import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reduxThunk from 'redux-thunk'
import App from './components/App'
import reducers from './reducers'

import './components/css/index.css'

const store = createStore(reducers, {})
ReactDOM.render(
    <Provider store={store}><App/></Provider>, document.querySelector('#root'))