import Config from './Config'
import CoreAPI from './CoreAPI'

interface IDocument {
  content: string
  format: string
}

/* Logic for Documents in core api */
class OpenWeatherService extends CoreAPI {
  /**
   * Get
   *
   * @param city - a name of the city for weather forecast
   */
  public async getWeather(city: string) {
    return await this.getRequest(`?q=${city}&units=metric`)
  }
}

export default new OpenWeatherService()
