/**
 * @name Credit
 * @description This module exposes functions
 *              related to the '/credit' path.
 *
 * @module credit
 **/

import { cond, has, T, curry } from 'ramda'
import routes from '../routes'
import request from '../request'

/**
 * `GET /credit/credit_lines`
 *
 * Returns all credit lines.
 *
 * @param {Object} opts   An options params which
 *                        is usually already bound
 *                        by `connect` functions.
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
const findAllCreditLines = opts =>
  request.get(opts, routes.credit.creditLines.all)

/**
 * `GET /credit/credit_lines/:creditLineId/proposals/:proposalId`
 *
 * Returns requested proposal.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param {String} body.creditLineId The credit line's ID
 * @param {String} body.proposalId The proposal's ID
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
const findOneProposal = (opts, body) =>
  request.get(opts, routes.credit.proposals.details(body.creditLineId, body.proposalId))

/**
 * `POST /credit/credit_lines/:creditLineId/proposals`
 *
 * Creates a proposals based on credit line.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param {String} body.creditLineId The credit line's ID
 * @param {String} body.amount The proposal amount
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
const createProposal = (opts, body) =>
  request.post(opts, routes.credit.proposals.create(body.creditLineId), body)

/**
 * `POST /credit/credit_lines/:creditLineId/proposals/:proposalId/accept`
 *
 * Accepts a proposal
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param {String} body.creditLineId The credit line's ID
 * @param {String} body.proposalId The proposal's ID
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
const acceptProposal = (opts, body) =>
  request.post(opts, routes.credit.proposals.accept(body.creditLineId, body.proposalId), body)

/**
 * `GET /credit/credit_lines/:creditLineId/proposals/:proposalId/settlement_forecast`
 *
 * Returns the settlement forecast from the given proposal
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param {String} body.creditLineId The credit line's ID
 * @param {String} body.proposalId The proposal's ID
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
const settlementForecast = (opts, body) =>
  request.get(opts, routes.credit.proposals
    .settlementForecast(body.creditLineId, body.proposalId), body)

/**
 * `GET /credit/loans`
 *
 * Returns all loans
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
const findAllLoans = curry(opts =>
  request.get(opts, routes.credit.loans.all))

/**
 * `GET /credit/loans/:loanId`
 *
 * Returns the requested loan
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param {String} body.loanId The loan's ID
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
const findOneLoan = curry((opts, body) =>
  request.get(opts, routes.credit.loans.details(body.loanId), body))

/**
 * `GET /credit/loans` OR `GET /credit/loans/:loanId`
 *
 * Returns the requested loan if the loan's ID is passed; otherwise returns all loans.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param {String} [body.loanId] The optional loan's ID
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
const findLoans = (opts, body) =>
  cond([
    [has('loanId'), findOneLoan(opts)],
    [T, findAllLoans(opts)],
  ])(body)

/**
 * `GET /credit/loans/:loanId/statements/daily`
 *
 * Returns the daily statements of the given loan
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param {String} body.loanId The optional loan's ID
 *
 * @param {Number} [body.count] Pagination option to get a list of plans.
 *                              Number of plans in a page
 * @param {Number} [body.page] Pagination option for a list of plans.
 *                             The page index.
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
const dailyStatement = (opts, body) =>
  request.get(opts, routes.credit.statements.daily(body.loanId), body)

/**
 * `GET /credit/loans/:loanId/statements/monthly`
 *
 * Returns the monthly statements of the given loan
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 * @param {String} body.loanId The optional loan's ID
 *
 * @param {Number} [body.count] Pagination option to get a list of plans.
 *                              Number of plans in a page
 * @param {Number} [body.page] Pagination option for a list of plans.
 *                             The page index.
 *
 * @returns {Promise} Resolves to the result of
 *                    the request or to an error.
 */
const monthlyStatement = (opts, body) =>
  request.get(opts, routes.credit.statements.monthly(body.loanId), body)

export default {
  creditLines: {
    all: findAllCreditLines,
  },
  proposals: {
    findOne: findOneProposal,
    create: createProposal,
    accept: acceptProposal,
    settlementForecast,
  },
  loans: {
    all: findAllLoans,
    find: findLoans,
  },
  statements: {
    findMonthly: monthlyStatement,
    findDaily: dailyStatement,
  },
}
