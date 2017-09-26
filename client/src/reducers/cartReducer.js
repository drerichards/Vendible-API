import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types'

function cartFunction (state = [], action) {
    // state = []
    switch (action.type) {
        case ADD_TO_CART:
            // console.log(action.payload)
            return [...state, action.payload]
        case REMOVE_FROM_CART:
            console.log(action.payload)        
            return state.splice(action.payload, 1)
        default:
            return state
    }
}

export default function (state = [1,2,3], action){
    console.log(state)            
    // console.log(state.cart)            
    // console.log(action)            

   return {cart: cartFunction(state, action)}
}