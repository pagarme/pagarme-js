import {
  __,
  both,
  gte,
  lte,
} from 'ramda'

const validate = both(gte(__, 1), lte(__, 12))

export default parseInt
  & validate
