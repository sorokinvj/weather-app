import React from 'react'
import { ForecastResponse } from '../../types/ForecastResponse'

interface IForecast {
  forecast: ForecastResponse
}
const Forecast: React.FC<IForecast> = ({ forecast }) => {
  console.log(forecast)
  return <div></div>
}

Forecast.propTypes = {}

export default Forecast
