/**
 * @name Security
 * @description This module exposes functions
 *              related to security procedures.
 *
 * @module security
 **/
import NodeRSA from 'node-rsa'
import Promise from 'bluebird'
import qs from 'qs'
import {
  toString,
  replace,
} from 'ramda'
import {
  verifySignature,
  calculateSignature,
} from '../postback'

import transactions from './transactions'

const cleanNumber = toString & replace(/[^0-9]/g, '')

const queryString = card =>
  qs.stringify({
    card_number: cleanNumber(card.card_number),
    card_holder_name: card.card_holder_name,
    card_expiration_date: cleanNumber(card.card_expiration_date),
    card_cvv: cleanNumber(card.card_cvv),
  })

const generateCardHash = ({ public_key: publicKey, id }, cardString) => {
  const key = new NodeRSA(publicKey, {
    encryptionScheme: 'pkcs1',
  })
  const encrypted = key.encrypt(cardString, 'base64')
  return `${id}_${encrypted}`
}

/**
 * Encrypt a card object into a card_hash
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {Object} card The card object.
 * {@link https://pagarme.readme.io/v1/reference#gerando-card_hash-manualmente|API Reference for this payload}
 *
 * @param {String} card.card_number The card's number.
 *                             Example: '4111111111111111'
 * @param {String} card.card_holder_name The card's holder name.
 *                             Example: 'Pedro Paulo'
 * @param {String} card.card_expiration_date The card's expiration date.
 *                             Example: '1225' or '12/25'
 * @param {String} card.card_cvv The card's cvv.
 *                             Example: '543'
*/
const encrypt = (opts, card) =>
  Promise.props({
    key: card.key ? card.key : transactions.cardHashKey(opts),
    cardString: queryString(card),
  })
    .then(({ key, cardString }) => generateCardHash(key, cardString))

/**
 * Generates a hash signed with your api_key.
 * This is used mainly to validate postbacks,
 * this functions is the same as pagarme.postback.calculatesignature
 * but it already knows your api_key.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {String} string The string to be hashed.
 *
*/
const sign = (opts, string) =>
  calculateSignature(opts.body.api_key, string)

/**
 * Verifies a hash signed with your api_key.
 * This is used mainly to validate postbacks,
 * this functions is the same as pagarme.postback.validateSignature
 * but it already knows your api_key.
 *
 * @param {Object} opts An options params which
 *                      is usually already bound
 *                      by `connect` functions.
 *
 * @param {String} string The string to be hashed.
 *
 * @param {String} expected The expected result.
 *
*/
const verify = (opts, string, expected) =>
  verifySignature(opts.body.api_key, string, expected)

export default {
  encrypt,
  sign,
  verify,
}
