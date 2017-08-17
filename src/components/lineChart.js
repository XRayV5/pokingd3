import React, {Component} from 'react'
import { scaleTime, scaleLinear } from 'd3-scale'
import {line} from 'd3-shape'
import {timeParse} from 'd3-time-format'
import {extent, max} from 'd3-array'

export default (props) => {
    const {width, height, data} = props
    if(!data.list) return null
    const { list } = data 
    console.log(timeParse)
    const parseTime = timeParse("%y-%b-%d %H:%M:%S")
    // const _parseTime = timeParse("%y-%b-%d")
    // console.log(_parseTime("2007-Jun-01"))
    // const xVals = data.list.map((probe) => parseTime(probe.dt_txt))
    // const yVals = data.list.map((probe) => probe.main.temp)
    const xScale = scaleTime()
                .range([0, width])
                .domain(extent(list, (d) => (console.log(parseTime(d.dt)), d.dt)))

    const yScale = scaleLinear()
                .range([height, 0])
                .domain(extent(list, (d) => d.main.temp));
    const makeLine = line().x((d) => xScale(d.dt)).y((d) => yScale(d.main.temp))
    console.log(makeLine(list))
    return (
        <svg  className='line' width={width} height={height}>
            <g>
                <path
                    d={makeLine(list)}
                />
            </g>
        </svg>
    )
} 
// "2017-08-17 03:00:00"