/**
 * @name Strategies
 * @description This module is responsible for the
 *              authentication method strategies.
 * @module strategies
 * @private
 */

import {
  and,
  both,
  has,
  cond,
  T,
  isNil,
} from 'ramda'

import encryption from './encryption'
import login from './login'
import api from './api'
import sessionId from './sessionId'
import jwt from './jwt'

const isBrowserEnvironment = typeof global === 'undefined'

function rejectInvalidAuthObject () {
  return Promise.reject(new Error('You must supply a valid authentication object'))
}

function rejectAPIKeyOnBrowser () {
  return Promise.reject(new Error('You cannot use an api key in the browser!'))
}

/**
 * Defines the correct authentication
 * method according to the supplied
 * object's properties and returns
 * the builder function.
 *
 * @param {Object} options The object containing
 *                         the authentication data
 * @return {?Function} The builder function for
 *                     the Authentication method
 * @private
 */
const strategyBuilder = cond([
  [both(has('email'), has('password')), login.build],
  [has('api_key'), api.build],
  [has('encryption_key'), encryption.build],
  [has('session_id'), sessionId.build],
  [both(has('account_id'), has('jwt')), jwt.build],
  [T, rejectInvalidAuthObject],
])

/**
 * Finds and resolves to a builder
 * function for authentication
 * according to the supplied object.
 *
 * @param {Object} options The object containing
 *                         the authentication data
 * @returns {Promise} Resolves to either the
 *                    correct builder function
 *                    or rejects with an Error.
 */
function find (options) {
  if (isNil(options)) {
    return rejectInvalidAuthObject()
  }

  if (and(has('api_key', options), isBrowserEnvironment)) {
    return rejectAPIKeyOnBrowser()
  }

  return Promise.resolve(strategyBuilder(options))
}

export default { find }
