/**
 * Client Module
 * @description The client module is the entry point for our SDK.
 *              It holds a Promise-based authentication method
 *              ([connect]{@link client#connect}) as well as
 *              allowing for raw use of the resources (without authentication).
 * @module client
 */

import {
  __,
  merge,
  map,
  equals,
  type,
  ifElse,
  partial,
  invoker
} from 'ramda'

import strategies from './strategies'
import resources from '../resources'

/**
 * Binds the `options` received as param
 * to the client's resources.
 * @private
 *
 * @param {Object} options
 * @returns A version of resources with its methods' first param binded to `options`
 */
function bindClientOptions ({ options, authentication }) {
  const bindRecursive = ifElse(
    is(Function),
    partial(__, options),
    map(bindRecursive)
  )

  const boundClient = map(bindRecursive, resources)
  return merge(boundClient, { authentication })
}

/**
 * Returns a version of client with
 * authentication data binded to the
 * resource requests.
 *
 * @example
 * // API Key Authentication
 * pagarme.client.connect({ apiKey: 'ak_test_y7jk294ynbzf93' })
 *
 * // Encryption Key Authentication
 * pagarme.client.connect({ encryptionKey: 'ek_test_y7jk294ynbzf93' })
 *
 * // Login Authentication
 * pagarme.client.connect({ email: 'user@email.com', password: '123456' })
 *
 * @param {Object} authentication
 * @returns {Promise} A Promise that resolves to a client with authentication data binded
 */
function connect (authentication) {
  return strategies
    .find(authentication)
    .then(invoker(0, 'execute'))
    .then(bindClientOptions)
}

const client = merge(resources, { connect })

export default client
