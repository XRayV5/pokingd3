import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'
import * as actions from './index'
import * as types from './types'
import {url_base, Kii, fetchFromOpenWeather} from '../api/'

const getCities = (state) => state.weatherReducer.cities

const getIds = (cities) => cities.map((city) => city.id)

function* _fetchWeatherData() {
    while(true) {
        yield take(types.FETCH_ALL_WEATHER)
        const cities = yield select(getCities)
        const res = yield call(fetchFromOpenWeather, getIds(cities))
        console.log(res)
        const resolved = yield res
        yield put(actions.forwardWeatherData(resolved))
    }
}

function* importCities() {
    try{
        const cities = require('../meta/cities.json')
        yield put({
            type: types.IMPORT_CITY,
            payload: cities
        })
    } catch(e) {
        console.error("Failed to fetch cities ", e)
    }
}

export default function* (dispatch) {
    yield [
        fork(_fetchWeatherData),
        fork(importCities)
    ]
}