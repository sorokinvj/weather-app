// core libs
import React, { useEffect, useState } from 'react'

// components
import Suggest from '../Suggest/Suggest'
import Forecast from '../Forecast/Forecast'
// service
import OpenWeatherService from '../../services/OpenWeatherService'
import sky from './sky.jpg'

// styles
import GlobalStyles from './globalStyles'
import { AppStyled } from './AppStyled'

const App: React.FC = () => {
  const [forecastResponse, setForecastResponse] = useState<any>(null)
  const [selectedCityID, selectCityID] = useState<number | undefined>(undefined)
  useEffect(() => {
    const fetchWeather = async (cityID: number) => {
      const res = await OpenWeatherService.getWeather(cityID)
      setForecastResponse(res)
    }
    if (selectedCityID) {
      fetchWeather(selectedCityID)
    }
  }, [selectedCityID])

  return (
    <>
      <GlobalStyles />
      <AppStyled data-testid="app" back={sky}>
        <h1 className="app-title">3-day Weather foreacast in UK</h1>
        <Suggest selectCityID={selectCityID} />
        {forecastResponse ? <Forecast forecast={forecastResponse} /> : null}
      </AppStyled>
    </>
  )
}

export default App
