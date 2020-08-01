// core libs
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

// components
import Autocomplete from './Autocomplete'

// service
import OpenWeatherService from './services/OpenWeatherService'

import 'semantic-ui-css/semantic.min.css'

const APPStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const App: React.FC = () => {
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
      <h1>Forecast app</h1>
      <Autocomplete />
      <div className="response"></div>
    </APPStyled>
  )
}

export default App
