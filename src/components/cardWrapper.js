import React, { Component } from "react"
import { connect } from "react-redux"
import * as actions from "../actions"
import LineChart from "./lineChart"

class CardWrapper extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchWeatherData()
    }

    render () {
        const { data } = this.props.weatherData
        if(data.length === 0) return null
        const cards = data.map(byCity => <div>{byCity.city.name}</div>)
        console.log(cards)
        return (
            <div>
                <LineChart
                    data={data[3]}
                    width={200}
                    height={200}
                />
                {[...cards]}</div>
        )
    }
}

const mapStateToProps = ({ weatherReducer }) => ({ weatherData: weatherReducer })

export default connect(mapStateToProps, { ...actions })(CardWrapper)