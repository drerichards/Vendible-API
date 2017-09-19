import { combineReducers } from 'redux'
import deptReducer from './deptReducer'
import authReducer from './authReducer'
import inventoryReducer from './inventoryReducer'

export default combineReducers({
    departments: deptReducer,
    auth: authReducer,
    inventory: inventoryReducer
})
