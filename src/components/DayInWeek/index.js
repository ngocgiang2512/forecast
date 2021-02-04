import moment from 'moment'
import { celToFah } from '../../modules/utils'
import { DayInWeekStyle } from './style'

const DayInWeek = (props) => {
  let dayItemClass = "day-in-week"
  dayItemClass += props.activeDay === props.dt ? " active" : ""
  let imgUrl = `http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`
  let tempMax = props.impSystem? Math.round(props.temp.max) : celToFah(props.temp.max)
  let tempMin = props.impSystem? Math.round(props.temp.min) : celToFah(props.temp.min)

  return (
    <DayInWeekStyle>
      <div className={dayItemClass} onClick={() => props.setActiveDay(props.dt)}>
        <p className="day">{moment.unix(props.dt).format('ddd')}</p>
        <p className="icon">
          <img src={imgUrl} alt="" />
        </p>
        <p className="temp-max">
          <span>{tempMax}</span>
        </p>
        <p className="temp-min">
          <span>{tempMin}</span>
        </p>
      </div>
    </DayInWeekStyle>
  )
}

export default DayInWeek