import axios, { AxiosError } from 'axios'
import Config from './Config'

/* Logic for accessing CoreAPI */
class CoreAPI {
  /**
   * Return a single error message
   *
   * @param error - axios error
   */
  public errorMessage(error: AxiosError) {
    if (error.response) {
      // Request made and server responded
      return error.response.data.message
    } else if (error.request) {
      // The request was made but no response was received
      return 'Cannot connect to Server. Please check your connection.'
    } else {
      // Something happened in setting up the request that triggered an Error
      return error.message
    }
  }

  /**
   * API Request handler
   * @param url - api endpoint
   * @param bodyParams - body parameters of request
   */
  public async getRequest(url: string, bodyParams?: any): Promise<any> {
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
    const requestURL = `${Config.endPoint}${url}&${Config.apiKey}`

    const response = await axios.get(requestURL, {
      ...config,
      params: bodyParams,
    })
    return await response.data
  }

  // for API's that need authentication
  public setAuthenticationHeader(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  }
}

export default CoreAPI
