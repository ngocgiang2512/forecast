import React from "react"
import Loading from './components/Loading'
import Error from './components/Error'
import Forecast from './components/Forecast'
import { weatherApiUrl, getPollutionApiUrl } from './modules/api'
import './App.css'

class App extends React.Component {
  // State:
  // { loading: true }
  // { loading: false, result: { current, daily } }
  // { loading: false, error: any }
  state = { loading: true }

  componentDidMount() {
    fetch(weatherApiUrl)
      .then(res => res.json())
      .then(
        result => {
          this.setState({ loading: false, result });

          let startTime = result.current.sunrise
          let endTime = result.current.sunset
          let aqiUrl = getPollutionApiUrl(startTime, endTime)

          fetch(aqiUrl)
            .then(aqiRes => aqiRes.json())
            .then(
              apiResult => {
                if (apiResult.list.length > 0) {
                  this.setState({ aqi: apiResult.list[0].main.aqi })
                } else {
                  this.setState({ aqi: 0 });
                }
              }
            );
        },
        error => this.setState({ loading: false, error })
      )
  }

  render() {
    let { loading, result } = this.state

    if (loading) {
      return <Loading />
    } else if (result) {
      return <Forecast {...result} />
    } else {
      return <Error />
    }
  }
}

export default App
