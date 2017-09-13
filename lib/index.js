import { merge } from 'ramda'
import client from './client'
import validate from './validations'
import postback from './postback'
import resources from './resources'

export default merge({
  client,
  validate,
  postback,
}, resources)

