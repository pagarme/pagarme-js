/**
 * @name sessionId
 * @memberof strategies
 * @private
 */
import { reject, resolve } from 'bluebird'
import { merge } from 'ramda'
import transactions from '../../resources/transactions'

/**
 * Creates an object with
 * the `session_id` from
 * the supplied `options` param
 *
 * @param {any} options
 * @returns {Object} an object containing
 *                   a body property with
 *                   the desired `session_id`
 * @private
 */
function execute ({ session_id, environment, options, skipAuthentication }) {
  const headers = environment === 'live'
    ? { 'X-Live': 1 }
    : {}

  const opts = merge(options, {
    body: { session_id },
    headers,
  })

  return transactions.calculateInstallmentsAmount(
    opts, { amount: 1, interest_rate: 100 }
  )
    .catch(error => (skipAuthentication ? resolve(opts) : reject(error)))
    .catch({ name: 'ApiError' }, () => reject(new Error('You must supply a valid session id')))
    .then(() => ({
      authentication: { session_id },
      options: opts,
    }))
}

/**
 * Returns the supplied parameter with
 * the `execute` function added to it.
 *
 * @param {any} options
 * @returns {Object} The `options` parameter
 *                   with `execute` add to it
 * @private
 */
function build (options) {
  return merge(options, { execute: execute.bind(null, options) })
}

export default {
  build,
}
