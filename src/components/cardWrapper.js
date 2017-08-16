import React, { Component } from "react"
import { connect } from "react-redux"
import * as actions from "../actions"

class CardWrapper extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchWeatherData()
    }

    render () {
        return <div>Weather Cards here...</div>
    }
}

// const mapStateToProps = () => ({})

export default connect(null, { ...actions })(CardWrapper)