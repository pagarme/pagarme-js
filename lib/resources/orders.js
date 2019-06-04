/**
 * @name Orders
 * @description This module exposes functions
 *              related to the `/orders` path.
 *
 * @module Orders
 **/

import { curry } from 'ramda'

import routes from '../routes'
import request from '../request'

const findAll = curry((opts, pagination) =>
  request.get(opts, routes.orders.base, pagination || {})
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
 * @param {Number} [body.status] The paymentLinks Status. If not sent a
 *                           orders list will be returned instead.
 * @param {Number} [body.payment_link_id] The paymentLinks ID. If not sent a
 *                           orders list will be returned instead.
*/
const all = (opts, body) =>
  findAll(opts, body)

export default {
  all,
}
