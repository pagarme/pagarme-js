/**
 * @name encryption
 * @memberof strategies
 * @private
 */
import { reject, resolve } from 'bluebird'
import {
  T,
  always,
  cond,
  has,
  is,
  merge,
  pick,
  when,
} from 'ramda'
import ApiError from '../../../lib/errors'
import { calculateInstallmentsAmount } from '../../resources/transactions'

/**
 * Creates an object with
 * the `encryption_key` from
 * the supplied `options` param
 *
 * @param {any} options
 * @returns {Object} an object containing
 *                   a body property with
 *                   the desired `encryption_key`
 * @private
 */
function execute (opts) {
  const { encryption_key, options = {} } = opts
  const payload = merge({
    body: {
      encryption_key,
    },
  }, when(has('baseURL'), pick(['baseURL']), options))

  return calculateInstallmentsAmount(payload, { amount: 1, interest_rate: 100 })
    .catch(cond([
      [always(opts.skipAuthentication), resolve],
      [is(ApiError), () => reject(new Error('You must supply a valid encryption key'))],
      [T, ({ name }) => {
        console.warn(`Warning: Could not verify key. Pagar.me may be offline ${name}`)
      }],
    ]))
    .then(() => merge(payload, opts.options))
    .then(requestOpts => ({
      authentication: { encryption_key },
      options: requestOpts,
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
