import nock from 'nock'
import axios from 'axios'
import CoreAPI from './CoreAPI'
import successfulResponse from './__mocks__/forecastSuccessful.json'
import errorResponse from './__mocks__/errorResponse.json'
import Config from './Config'

// this makes actual api call
describe('CoreAPI', () => {
  // we need this for nock to mock axios
  // tslint:disable-next-line: no-var-requires
  axios.defaults.adapter = require('axios/lib/adapters/http')
  const service = new CoreAPI()

  describe('errorMessage', () => {
    beforeEach(() => {
      nock.disableNetConnect()
      nock.enableNetConnect(/^(127\.0\.0\.1|localhost)/)
    })

    afterEach(() => {
      nock.cleanAll()
    })

    it('should return message', async () => {
      const scope = nock(`${Config.endPoint}`)
        .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
        .get(/demo/)
        .reply(401, errorResponse)

      try {
        await service.getRequest('demo')
      } catch (error) {
        const result = service.errorMessage(error)
        expect(result).toEqual(errorResponse.message)
      }

      scope.done()
    })

    it('should return message if error', async () => {
      const scope = nock(`${Config.endPoint}`)
        .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
        .get(/demo/)
        .reply(200, {})

      try {
        await service.getRequest('/demo')
        throw new Error('oops')
      } catch (error) {
        const result = service.errorMessage(error)
        expect(result).toEqual('oops')
      }

      scope.done()
    })
  })

  describe('getRequest', () => {
    beforeEach(() => {
      nock.disableNetConnect()
      nock.enableNetConnect(/^(127\.0\.0\.1|localhost)/)
    })

    afterEach(() => {
      nock.cleanAll()
    })

    it('should return a response', async () => {
      const scope = nock(`${Config.endPoint}`)
        .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
        .get(/London/)
        .reply(200, successfulResponse)

      const result = await service.getRequest(`?q=London`)

      expect(result.cod).toEqual(successfulResponse.cod)
      scope.done()
    })
  })
})
