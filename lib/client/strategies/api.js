/**
 * @name api
 * @memberof strategies
 * @private
 */
import Promise from 'bluebird'
import { merge } from 'ramda'
import company from '../../resources/company'


/**
 * Creates an object with
 * the `api_key` from
 * the supplied `options` param
 *
 * @param {any} options
 * @returns {Object} an object containing
 *                   a body property with
 *                   the desired `api_key
 * @private
 */
function execute (opts) {
  const { api_key, options } = opts
  const body = {
    body: {
      api_key,
    },
  }

  if (options && options.baseURL) {
    body.baseURL = options.baseURL
  }

  return company.current(body)
    .catch((error) => {
      if (opts.skipAuthentication) { return resolve() }
      if (error.name === 'ApiError') {
        throw new Error('You must supply a valid API key')
      }
      console.warn(`Warning: Could not verify key. Pagar.me may be offline ${error.name}`)
    })
    .then(() => merge(body, opts.options))
    .then(requestOpts => ({
      authentication: { api_key },
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
  return merge(options, { execute: partial(execute, [options]) })
}

export default {
  build,
}
