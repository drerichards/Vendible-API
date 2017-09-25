import { combineReducers } from 'redux'
import deptReducer from './deptReducer'
import authReducer from './authReducer'
import inventoryReducer from './inventoryReducer'
import modalReducer from './modalReducer'
import cartReducer from './cartReducer'

export default combineReducers({
    departments: deptReducer,
    auth: authReducer,
    inventory: inventoryReducer,
    modal: modalReducer,
    cart: cartReducer
})
