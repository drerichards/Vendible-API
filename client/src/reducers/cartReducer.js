import { ADD_TO_CART } from '../actions/types'

export default function (state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            state.push(action.payload)
            console.log(state)
            return state
        default:
            return state
    }
}