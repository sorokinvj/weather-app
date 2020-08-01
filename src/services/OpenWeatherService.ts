import CoreAPI from './CoreAPI'

/* Logic for Documents in core api */
class OpenWeatherService extends CoreAPI {
  /**
   * Get
   *
   * @param city - a name of the city for weather forecast
   */
  public async getWeather(city: number) {
    return await this.getRequest(`?id=${city}&units=metric`)
  }
}

export default new OpenWeatherService()
