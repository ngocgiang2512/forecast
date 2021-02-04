import React, { useState } from "react"
import DayDetail from '../DayDetail'
import DayInWeek from '../DayInWeek'
import { ForecastWrapper } from './style'

const Forecast = ({ loading, current, daily }) => {
  const [impSystem, setImpSystem] = useState(true);
  const [activeDay, setActiveDay] = useState(daily[0].dt);

  let activeDayWeathers = daily.filter(day => day.dt === activeDay)
  let isCurrentDay = activeDayWeathers[0].dt === daily[0].dt

  return (
    <ForecastWrapper>
      <DayDetail 
        impSystem={impSystem}
        setImpSystem={setImpSystem}
        isCurrentDay={isCurrentDay}
        {...activeDayWeathers[0]}
      />
      <div className="days clearfix">
        {daily.map((day, index) =>
          <DayInWeek 
            key={index}
            {...day}
            impSystem={impSystem}
            activeDay={activeDay}
            setActiveDay={setActiveDay}
          />
        )}
      </div>
    </ForecastWrapper>
  )
}

export default Forecast
