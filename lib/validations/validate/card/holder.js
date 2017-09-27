import {
  replace,
  test,
  toString,
} from 'ramda'

export default toString
  & replace(/"/g, "'")
  & test(/^[a-z_' ]*$/i)
