import React from 'react'
import { ForecastCardStyled } from './ForecastStyled'
import { ForecastData } from '../../types/ForecastResponse'
import moment from 'moment'

interface IForecastCard {
  title: string
  weather: ForecastData | undefined
}

const ForecastCard: React.FC<IForecastCard> = ({ title, weather }) => {
  return (
    <ForecastCardStyled>
      <h3 className="day">{title}</h3>
      <h3 className="date">{moment(weather!.dt_txt).format('D MMM')}</h3>
      <img
        className="icon"
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={`${weather.weather[0].description} icon`}
      />
      <h2 className="temp">{Math.round(weather!.main.feels_like)} &#176;C</h2>
    </ForecastCardStyled>
  )
}

export default ForecastCard
