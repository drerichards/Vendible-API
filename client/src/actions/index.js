import axios from 'axios'
import { FETCH_USER } from './types'
import { FETCH_PRODUCTS } from './types'
import { SHOW_MODAL } from './types'
import { HIDE_MODAL } from './types'

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    dispatch({ type: FETCH_USER, payload: res.data })
}

export const fetchProducts = (dept) => async dispatch => {
    const route = `/inventory/${dept.toLowerCase()}`
    const res = await axios.get(route)
    dispatch({ type: FETCH_PRODUCTS, payload: res.data })
}

export const showModal = () => {
    return {type: SHOW_MODAL}
}

export const hideModal = () => {
    return {type: HIDE_MODAL}
}