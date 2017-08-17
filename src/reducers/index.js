import { combineReducers } from "redux"
import * as types from "../actions/types"

const mapKey = (arrObjs) => arrObjs.reduce((stack, val) => ({...stack, [val.city.name]: val}), {})

const weatherReducer = (state = { cities: [], data: [] }, { type, payload }) => {
    switch (type) {
        case types.FETCH_WEATHER_API:
            return { ...state, data: [...payload]}
        case types.IMPORT_CITY:
            return { ...state, cities: [...payload]}
        default:
            return state
    }
}

export default combineReducers({
    weatherReducer
})

