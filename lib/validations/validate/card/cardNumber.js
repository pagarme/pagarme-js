import {
  __,
  addIndex,
  eqBy,
  equals,
  init,
  juxt,
  last,
  modulo,
  reduceRight,
  replace,
  split,
  sum,
  toString,
  when,
} from 'ramda'

const reduceRightIndexed = addIndex(reduceRight)
const clean = replace(/[^0-9]/g, '')
const mask = [0, 1, 2, 3, 4, -4, -3, -2, -1, 0]

const finalSumReducer = (acc, digit, index, digits) =>
  eqBy(modulo(__, 2), digits.length - 1, index)
    ? acc + mask[digits[index]]
    : acc

const validate = cardNumber => {
  const [withoutLastDigit, lastDigit] = cardNumber | juxt([init, last])
  const finalSum = withoutLastDigit
    | split('')
    | reduceRightIndexed(finalSumReducer, sum(withoutLastDigit))

  const rest = 10 - (finalSum % 10)
  return when(equals(10), ~0, rest) === parseInt(lastDigit, 10)
}

export default toString & clean & validate
