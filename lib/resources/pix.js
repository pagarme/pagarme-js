/**
 * @name Pix
 * @description This module exposes functions
 *              related to the `/pix` path.
 *
 * @module balanceOperations
 **/
import routes from '../routes'
import request from '../request'

const createKey = (opts, body) =>
  request.post(opts, routes.pix.keys, body || {})

const getKeys = opts =>
  request.get(opts, routes.pix.keys)

export default {
  createKey,
  getKeys,
}
