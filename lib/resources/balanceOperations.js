/**
 * @name Balance Operations
 * @description This module exposes functions
 *              related to the `/balance/operations` path.
 *
 * @module balanceOperations
 **/

import {
  T,
  both,
  cond,
  curry,
  dissoc,
  has,
  pick,
  when,
  complement,
  isEmpty,
  applySpec,
  prop,
  pipe,
} from 'ramda'

import routes from '../routes'
import request from '../request'

const findOne = curry((opts, body) =>
  request.get(opts, routes.balanceOperations.details(body.id), {})
)

const findAll = curry((opts, body) =>
  request.get(opts, routes.balanceOperations.base, body || {})
)

const findRecipients = curry((opts, body) =>
  request.get(
    opts,
    routes.balanceOperations.recipients.findAll(body.recipientId),
    dissoc('recipientId', body)
  )
)

const findRecipientsWithBalanceId = curry((opts, body) =>
  request.get(opts, routes.balanceOperations.recipients.find(body.id, body.recipientId), {})
)

const pickQueryProps = pick(['startDate', 'endDate'])

const renameKeys = when(
  complement(isEmpty),
  applySpec({
    end_date: prop('endDate'),
    start_date: prop('startDate'),
  })
)

const buildQuery = pipe(
  pickQueryProps,
  renameKeys
)

const findRecipientsWithFormat = curry((opts, body) => {
  const { recipientId, format } = body

  return request.get(
    opts,
    routes.balanceOperations.recipients.findWithFormat(recipientId, format),
    buildQuery(body)
  )
})

/**
 * `GET /balance/operations`
 * Makes a request to /balance/operations,
 * /balance/operations/:id,
 * /recipients/:recipient_id/balance/operations/ or
 * /recipients/:recipient_id/balance/operations/:id
 * and returns company's balanceOperations or returns a specif company's balanceOperation
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request.
 * {@link https://pagarme.readme.io/v1/reference#histórico-específico-de-uma-operação|API Reference for this payload}
 * @param {Number} [body.id] The operations's ID. If not sent a
 *                           operations list will be returned instead.
 * @param {Number} [body.recipientId] The recipient's ID.
 * @param {String} [body.format] The file extension.
 * @param {Number} [body.count] Pagination option to get a list of operations.
 *                              Number of operations in a page
 * @param {Number} [body.page] Pagination option for a list of operations.
 *                             The page index.
*/
const find = (opts, body) =>
  cond([
    [both(has('id'), has('recipientId')), findRecipientsWithBalanceId(opts)],
    [both(has('recipientId'), has('format')), findRecipientsWithFormat(opts)],
    [has('recipientId'), findRecipients(opts)],
    [has('id'), findOne(opts)],
    [T, findAll(opts)],
  ])(body)

/**
 * `GET /balance/operations`
 * Returns company's balanceOperations
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request.
 * {@link https://pagarme.readme.io/v1/reference#histórico-das-operações|API Reference for this payload}
 * @param {Number} [body.count] Pagination option to get a list of operations.
 *                              Number of operations in a page
 * @param {Number} [body.page] Pagination option for a list of operations.
 *                             The page index.
*/
const all = (opts, pagination) =>
  findAll(opts, pagination)

/**
 * `GET /balance/operations/days`
 * Returns a company's balanceOperations aggregated by day
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
*/
const days = (opts, body) =>
  request.get(opts, routes.balanceOperations.days, body || {})

export default {
  find,
  all,
  days,
}
