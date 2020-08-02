import React from 'react'
import { ForecastResponse, ForecastData } from '../../types/ForecastResponse'
import moment from 'moment'

import { ForecastStyled } from './ForecastStyled'
import ForecastCard from './ForecastCard'
interface IForecast {
  forecast: ForecastResponse
  index: number
}
const Forecast: React.FC<IForecast> = ({ forecast, index }) => {
  const today = moment.utc().hour(12).minute(0)
  const tomorrow = moment(today).add(1, 'days')
  const afterTomorrow = moment(today).add(2, 'days')
  const afterAfterTomorrow = moment(today).add(3, 'days')

  const findForecastByDate = (date: moment.Moment) => {
    return forecast.list.find((item: ForecastData) => {
      return date.diff(moment.utc(item.dt_txt), 'hours') === 0
    })
  }

  return (
    <ForecastStyled index={index} className="forecast-city">
      <h2 className="city-name">{forecast.city.name}</h2>
      <ForecastCard title="Today" weather={forecast.list[0]} />
      <ForecastCard title="Tomorrow" weather={findForecastByDate(tomorrow)} />
      <ForecastCard title={afterTomorrow.format('dddd')} weather={findForecastByDate(afterTomorrow)} />
      <ForecastCard title={afterAfterTomorrow.format('dddd')} weather={findForecastByDate(afterAfterTomorrow)} />
    </ForecastStyled>
  )
}

Forecast.propTypes = {}

export default Forecast
