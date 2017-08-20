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
        const cards = data.map(byCity => <Card data={byCity} />)
        console.log(cards)
        return (
            <div>
                {[...cards]}
            </div>
        )
    }
}



const mapStateToProps = ({ weatherReducer }) => ({ weatherData: weatherReducer })

export default connect(mapStateToProps, { ...actions })(CardWrapper)

const Card = (props) => (
        <div>
            <div>{props.data.city.name}</div>
            <div>
                <LineChart
                    data={props.data}
                    width={200}
                    height={200}
                />
            </div>
        </div>
)