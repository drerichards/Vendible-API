import { SHOW_MODAL, HIDE_MODAL } from '../actions/types'

export default function (state = false, action) {
    switch (action.type) {
        case SHOW_MODAL:
            return state = [true, action.payload]
        case HIDE_MODAL:
            return state = false
        default:
            return state
    }
}