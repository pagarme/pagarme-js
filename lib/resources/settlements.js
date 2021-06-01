/**
 * @name settlements
 * @description This module exposes functions
 *              related to the `/recipient/:id/settlements` path.
 *
 * @module settlements
 **/
import routes from '../routes'
import request from '../request'

/**
 * `GET /recipients/:id/settlements`
 * Get settlements for a specfic recipient.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param {String} [body.recipientId] - The ID of the recipient
 *
  *
 * @param {Object} body https://docs.pagar.me/reference?showHidden=7e035#retornando-pagamentos.
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
const all = (opts, body) =>
  request.get(opts, routes.settlements.all(body.recipientId), body)

/**
 * `GET /recipients/:id/settlements/contracts`
 * Get settlements for a specfic recipient.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param {String} [body.recipientId] - The ID of the recipient
 *
  *
 * @param {Object} body https://docs.pagar.me/reference?showHidden=7e035#retornando-pagamentos.
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
const contractsAll = (opts, body) =>
  request.get(opts, routes.settlements.contracts.all(body.recipientId), body)


export default {
  all,
  contracts: {
    all: contractsAll,
  },
}
