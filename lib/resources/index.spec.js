import { tap } from 'ramda'
import pagarme from '../..'
import fetch from 'isomorphic-fetch'

const getTemporaryCompany = () => {
  return fetch('https://api.pagar.me/1/companies/temporary', {
    method: 'post'
  })
  .then((response) => response.json())
}

/*
 *
 * This is an E2E test
 *
 */

jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000

describe('pagarme.client', () => {
  it('should return an error if an invalid api key is given', () =>
    pagarme.client.connect({ api_key: 'libjsdonetomorrow' })
      .catch(err =>
        expect(err.message).toBe('You must supply a valid API key')))

  it('should return an error when an invalid auth option is given', () =>
    pagarme.client.connect({ name: 'Minhoca' })
      .catch(err =>
        expect(err.message).toBe('You must supply a valid authentication object')))

  it('should return an error if an invalid encryption_key is given', () =>
    pagarme.client.connect({ encryption_key: 'fwefwe' })
      .catch(err =>
        expect(err.message).toBe('You must supply a valid encryption key')))

    test('when a valid api key is given', () => {
      getTemporaryCompany()
        .then((company) => {
          return pagarme.client.connect({ api_key: company.api_key.test })
            .then(client => client.company.current())
            .then(result => expect(!!result).toBeTruthy())
        })
    })

  test('when a valid encryption_key is given', () => {
    getTemporaryCompany()
      .then((company) => {
        const ek = company.encryption_key.test

        return pagarme.client.connect({ encryption_key: ek })
        .then(tap(client => expect(client.authentication.encryption_key)
        .toBe(ek)))
        .then(client => client.transactions.calculateInstallmentsAmount({
          amount: 1,
          interest_rate: 100,
        }))
        .then(result => expect(result).toBeTruthy())
        .catch(err =>
          expect(err.message).not.toBe('You must supply a valid key'))
      })
  })

  test('when Pagarme is offline and API key is used', () =>
    pagarme.client.connect({
      api_key: 'nwdu91jd9',
      options: {
        baseURL: 'http://a-big-non-existent-website-from-interwebs.nope',
      },
    })
      .then(tap(client => expect(client.authentication.api_key).toBe('nwdu91jd9'))))

  test('when Pagarme is offline and encryption key is used', () =>
    pagarme.client.connect({
      encryption_key: 'nwdu91jd9',
      options: {
        baseURL: 'http://a-big-non-existent-website-from-interwebs.nope',
      },
    })
      .then(tap(client => expect(client.authentication.encryption_key).toBe('nwdu91jd9'))))
})
