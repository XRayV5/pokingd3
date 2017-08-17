import * as types from "./types.js"

export const fetchWeatherData = () => ({ type: types.FETCH_ALL_WEATHER })

export const forwardWeatherData = (data) => {
    return ({ type: types.FETCH_WEATHER_API, payload: data})
}