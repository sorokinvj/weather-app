export interface WeatherParams {
  [key: string]: number
}

export interface ForecastData {
  dt: number
  dt_txt: number
  main: WeatherParams
  weather: WeatherMeta[]
}

interface WeatherMeta {
  description: string
  icon: string
}

export interface ForecastResponse {
  list: ForecastData[]
  city: {
    name: string
  }
}
