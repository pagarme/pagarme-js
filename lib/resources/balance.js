/**
 * @name Balance
 * @description This module exposes functions
 *              related to the `/balance` path.
 *
 * @module balance
 **/

import { dissoc } from 'ramda'
import routes from '../routes'
import request from '../request'

/**
 * `GET /balance`
 * Returns company's balance
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
*/
const primary = opts =>
  request.get(opts, routes.balance.base, {})

/**
 * `GET /recipients/:id/balance`
 * Returns the balance of a recipient.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request
 * @param {String} body.recipientId The recipient Id
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
const find = (opts, body) =>
  request.get(opts, routes.balance.recipient(body.recipientId), body)

/**
 * `GET /recipients/:id/balance/summary`
 * Returns the balance summary of a recipient.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request
 * @param {String} body.recipientId The recipient Id
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
const summary = (opts, body) =>
  request.get(
    opts,
    routes.balance.summary(body.recipientId),
    dissoc('recipientId', body)
  )

export default {
  primary,
  find,
  summary,
}
