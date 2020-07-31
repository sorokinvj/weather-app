class Config {
  public readonly endPoint: string
  public readonly apiKey: string | undefined
  constructor() {
    this.endPoint = process.env.REACT_APP_API_URL || 'https://api.openweathermap.org/data/2.5/forecast'
    this.apiKey = process.env.REACT_APP_WEATHER_API_KEY
    if (!this.apiKey) {
      throw Error('Open Weather Api key is not set. Please add your Api key to .env file in the project root')
    }
  }
}

export default new Config()
