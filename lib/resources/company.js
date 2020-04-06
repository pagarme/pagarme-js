/**
 * @name Company
 * @description This module exposes functions
 *              related to the `/company` and
 *              `/companies` paths.
 *
 * @module company
 **/

import routes from '../routes'
import request from '../request'

/**
 * `POST /companies`
 * Creates a company from the given payload.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request
 * @returns {Promise} A promise that resolves to
 *                    the newly created company's
 *                    data or to an error.
 **/
const create = (opts, body) =>
  request.post(opts, routes.company.basePlural, body)

/**
 * `POST /companies/temporary`
 * Creates a test-only temporary company.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request
 * @returns {Promise} A promise that resolves to
 *                    the newly created company's
 *                    data or to an error.
 **/
const createTemporary = (opts, body) =>
  request.post(opts, routes.company.temporary, body)

/**
 * `POST /companies/activate`
 * Activates a company.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @returns {Promise} A promise that resolves to
 *                    the newly created company's
 *                    data or to an error.
 **/
const activate = (opts, body) =>
  request.post(opts, routes.company.activate, body)

/**
 * `PUT /company`
 * Updates a company from the given payload.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request
 * @returns {Promise} A promise that resolves to
 *                    the newly created company's
 *                    data or to an error.
 **/
const update = (opts, body) =>
  request.put(opts, routes.company.base, body)

/**
 * `GET /company`
 * Return a company from the given payload.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @returns {Promise} A promise that resolves to
 *                    the newly created company's
 *                    data or to an error.
 **/
const current = opts =>
  request.get(opts, routes.company.base)

/**
 * `PUT /company/reset_keys`
 * Reset the company API keys.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request
 *
 * @returns {Promise} A promise that resolves to
 *                    the newly created company's
 *                    data or to an error.
 **/
const resetKeys = opts =>
  request.put(opts, routes.company.resetKeys)

/**
 * `GET /company/affiliation_progress`
 * Information about the affiliation progress.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @returns {Promise} A promise that resolves to
 *                    the newly created company's
 *                    data or to an error.
 **/
const affiliationProgress = opts =>
  request.get(opts, routes.company.affiliationProgress, {})

/**
 * `PUT /company/branding/:id`
 * Updates a company branding from the given payload.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} body The payload for the request
 *
 * @returns {Promise} A promise that resolves to
 *                    the newly created company's
 *                    data or to an error.
 **/
const updateBranding = (opts, body) =>
  request.put(opts, routes.company.branding(body.id), body)

const emailTemplates = {
  /**
   * `GET /company/email_templates/:id`
   * Get emails templates
   *
   * @param {Object} opts An options params which
   *                      is usually already bound
   *                      by `connect` functions.
   *
   * @param {Number} body.id The ID of the email template.
   *
   * @returns {Promise} A promise that resolves to
   *                    the newly created company's
   *                    data or to an error.
   **/
  find: (opts, body) =>
    request.get(opts, routes.company.emailTemplates(body.id), {}),

  /**
   * `PUT /company/email_templates/:id`
   * Updates a company from the given payload.
   *
   * @param {Object} opts An options params which
   *                      is usually already bound
   *                      by `connect` functions.
   *
   * @param {Object} body The payload for the request
   * @returns {Promise} A promise that resolves to
   *                    the newly created company's
   *                    data or to an error.
   **/
  update: (opts, body) =>
    request.put(opts, routes.company.emailTemplates(body.id), body),
}


/**
 * `POST /company/email_confirmation`
 * Resend account confirmation email to a previously registered company.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {String} body.email The email address to resend the account confirmation
 * @returns {Promise} A promise that resolves to
 *                    the send email confirmation company's
 *                    data or to an error.
 **/
const emailConfirmation = (opts, body) =>
  request.post(opts, routes.company.emailConfirmation, body)

export default {
  create,
  createTemporary,
  activate,
  emailConfirmation,
  update,
  current,
  resetKeys,
  affiliationProgress,
  updateBranding,
  emailTemplates,
}
