/**
 * @name Orders
 * @description This module exposes functions
 *              related to the `/orders` path.
 *
 * @module orders
 **/

import { cond, has, T, curry } from 'ramda'

import routes from '../routes'
import request from '../request'

const findAll = curry((opts, body) =>
  request.get(opts, routes.orders.base, body || {})
)

/**
 * `GET /orders`
 * Makes a request to /orders to get all orders.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Number} [body.id] The orders ID. If not sent a
 *                           orders list will be returned instead.
 * @param {Number} [body.count] Pagination option for orders list.
 *                              Number of orders in a page
 * @param {Number} [body.page] Pagination option for orders list.
 *                             The page index.
 * @param {Number} [body.status] The orders Status. If not sent a
 *                           orders list will be returned instead.
 * @param {Number} [body.payment_link_id] The orders ID. If not sent a
 *                           orders list will be returned instead.
*/
const all = (opts, body) =>
  findAll(opts, body)

/**
 * `POST /orders`
 * Creates an order from the given payload.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request.
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
const create = (opts, body) =>
  request.post(opts, routes.orders.base, body)


const findOne = curry((opts, body) =>
  request.get(opts, routes.orders.details(body.id), {})
)
/**
 * `GET /orders`
 * Makes a request to /orders or to /orders/:id
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request.
 * @param {Number} [body.id] The order ID. If not sent a
 *                           order list will be returned instead.
 * @param {Number} [body.count] Pagination option for order list.
 *                              Number of order in a page
 * @param {Number} [body.page] Pagination option for order list.
 *                             The page index.
*/
const find = (opts, body) =>
  cond([
    [has('id'), findOne(opts)],
    [T, findAll(opts)],
  ])(body)

export default {
  all,
  create,
  find,
}
