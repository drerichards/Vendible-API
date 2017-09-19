import axios from 'axios'
import { FETCH_USER } from './types'
// import { HANDLE_TOKEN } from './types'
import { FETCH_PRODUCTS } from './types'

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    dispatch({ type: FETCH_USER, payload: res.data })
}

export const fetchProducts = (dept) => async dispatch => {
    const route = `/inventory/${dept.toLowerCase()}`
    const res = await axios.get(route)
    dispatch({ type: FETCH_PRODUCTS, payload: res.data.inventory })
}

export const fetchProductsSuccess = (products) => {
    return { type: FETCH_PRODUCTS, products }
}

export const handleToken = (token) => async dispatch => {
    // const res = await axios.post('/api/stripe', token)
    // dispatch()
    //send email confirmation
}