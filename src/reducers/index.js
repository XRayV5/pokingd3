import { combineReducers } from "redux"
import * as types from "../actions/types"

const weatherReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case types.FETCH_ALL_WEATHER:
            return { ...payload}
        default:
            return state
    }
}

export default combineReducers({
    weatherReducer
})

