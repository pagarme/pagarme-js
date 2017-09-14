import {
  equals,
  length,
  replace,
  toString,
} from 'ramda'

const clean = replace(/[^0-9]+/g, '')

export default size => toString
  & clean
  & length
  & equals(size)
