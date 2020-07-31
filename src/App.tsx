import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import OpenWeatherService from './services/OpenWeatherService'
const APPStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
interface IApp {}
const App: React.FC<IApp> = () => {
  const [forecastResponse, setForecastResponse] = useState<any>(null)
  useEffect(() => {
    const fetchWeather = async (city: string) => {
      const res = await OpenWeatherService.getWeather(city)
      setForecastResponse(res)
    }
    fetchWeather('London')
  }, [])
  return (
    <APPStyled data-testid="app">
      <h1>Forecast for London</h1>
      <div className="response">
        {forecastResponse
          ? forecastResponse.list.map((forecast: any) => (
              <p key={forecast.dt_txt}>
                <span>{forecast.dt_txt}: </span>
                {forecast.main.temp}
              </p>
            ))
          : null}
      </div>
    </APPStyled>
  )
}

export default App
