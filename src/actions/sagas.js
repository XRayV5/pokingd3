import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'
import * as actions from './index'
import * as types from './types'


function* _fetchWeatherData() {
    while(true) {
        yield take(types.FETCH_ALL_WEATHER)
        console.log("Saga!!!")
    }
}

export default function* (dispatch) {
    yield [
        fork(_fetchWeatherData),
    ]
}