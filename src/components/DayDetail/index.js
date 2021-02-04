import _ from 'lodash'
import moment from 'moment'
import { 
  celToFah,
  mphToKph,
  getWindDirection,
  getAirPollutionInfo
} from '../../modules/utils'
import { DayDetailStyle } from './style'

const DayDetail = (props) => {
  let currentTime = props.isCurrentDay ? 
    moment.unix(props.dt).format('dddd hA')  :
    moment.unix(props.dt).format('dddd')
  let imgUrl = `http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`
  let tempMax =  _.get(props, 'temp.max', 0)
  let degree = props.impSystem ? Math.round(tempMax) : celToFah(tempMax)
  let windInfo = props.impSystem ? 
    props.wind_speed + ' MPH ' :
    mphToKph(props.wind_speed) + ' KPH '
  windInfo += getWindDirection(props.wind_deg)

  return (
    <DayDetailStyle>
      <p className="place">Hanoi, Vietnam</p>
      <p className="sub-title">{currentTime} - {props.weather[0].main}</p>
      <div className="detail clearfix">
        <div className="degree clearfix">
          <p className="icon">
            <img src={imgUrl} alt="" />
          </p>
          <p className="number">{degree}</p>
          <p className="unit">
            <span
              className={props.impSystem ? "active" : ""}
              onClick={() => props.setImpSystem(true)}
            >
              F
            </span>
            <span>/</span>
            <span
              className={props.impSystem ? "" : "active"}
              onClick={() => props.setImpSystem(false)}
            >
              C
            </span>
          </p>
        </div>
        <div className="weather-detail">
          <p>Humidity: {props.humidity}%</p>
          <p>Wind: {windInfo}</p>
          {props.aqi > 0 ? <p>Air Quality: {getAirPollutionInfo(props.aqi)}</p> : null}
        </div>
      </div>
    </DayDetailStyle>
  )
}

export default DayDetail
