import {combineReducers} from 'redux'
import apparelReducer from './apparelReducer'
import electronicsReducer from './electronicsReducer'
import homegoodsReducer from './homegoodsReducer'

export default combineReducers({apparel: apparelReducer, electronics: electronicsReducer, homegoods: homegoodsReducer})
