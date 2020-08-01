interface WeatherParams {
  [key: string]: number
}

interface ForecastData {
  dt: number
  main: WeatherParams
}

export interface ForecastResponse {
  list: ForecastData[]
}
