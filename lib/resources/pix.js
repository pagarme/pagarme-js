/**
 * @name PixKeys
 * @description This module exposes functions
 *              related to the `/pix` path.
 *
 * @module pixKeys
 **/
import routes from '../routes'
import request from '../request'

/**
 * `POST /pix/key`
 * Creates a pix from the given payload.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param {Object} body The payload for the request
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
const create = (opts, body) =>
  request.post(opts, routes.pix.keys, body || {})

/**
* `GET /pix/keys`
* Makes a request to /pix/keys
*
* @param {Object} opts - An options params which
*                      is usually already bound
*                      by `connect` functions.
*
*/
const all = opts =>
  request.get(opts, routes.pix.keys)

export default {
  create,
  all,
}
