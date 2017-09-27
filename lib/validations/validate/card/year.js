import {
  __,
  contains,
  propSatisfies,
  replace,
  toString,
} from 'ramda'

const clean = replace(/[^0-9]/g, '')

export default toString
  & clean
  & propSatisfies(contains(__, [2, 4]), 'length')
