/**
 * Client Module
 * @description The client module is the entry point for our SDK.
 *              It holds a Promise-based authentication method
 *              ([connect]{@link client#connect}) as well as
 *              allowing for raw use of the resources (without authentication).
 * @module client
 */

import {
  ifElse,
  is,
  map,
  merge,
  pipe,
} from 'ramda'
import y from 'y-combinator'

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
  const boundClient = map(
    y(pipe(map, ifElse(is(Function), func => func.bind(null, options)))),
    resources,
  )
  return merge(boundClient, { authentication })
}

/**
 * Returns a version of client with
 * authentication data binded to the
 * resource requests.
 *
 * @example
 * // API Key Authentication
 * pagarme.client.connect({ api_key: 'ak_test_y7jk294ynbzf93' })
 *
 * // Encryption Key Authentication
 * pagarme.client.connect({ encryption_key: 'ek_test_y7jk294ynbzf93' })
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
    .then(s => s.execute())
    .then(bindClientOptions)
}

const client = merge({ connect }, resources)

export default client
