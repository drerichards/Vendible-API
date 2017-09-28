import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types'

export default function (state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            // return state = state.concat([action.payload])
            return Array.apply([], state, state.push(action.payload))
        case REMOVE_FROM_CART:
            console.log(action.payload)  
            console.log(state)
            
                // = state.slice(action.payload, 1)   
            // return state = state.splice(action.payload, 1)   
            return Array.apply([], state, state.splice(action.payload,1))
        default:
            return state
    }
}