import {
  F,
  equals,
  ifElse,
  replace,
  splitEvery,
  toString,
  propSatisfies,
  map,
} from 'ramda'

const clean = replace(/[^0-9]/g, '')

const getCurrentDate = () => {
  const now = new Date()
  return {
    year: now.getFullYear() % 1000,
    month: now.getMonth() + 1
  }
}

const validateDate = date => {
  const now = getCurrentDate()
  const [month, year] = date
    | splitEvery(2)
    | map(Number)
  return month >= 1 && month <= 12
    && (year > now.year || (year === now.year && month >= now.month))
}

const validate = ifElse(
  propSatisfies(equals(4), 'length'),
  validateDate,
  F
)

export default toString
  & clean
  & validate
