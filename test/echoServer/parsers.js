import qs from 'qs'
import {
  T,
  cond,
  curry,
  head,
  join,
  pipe,
  propEq,
  split,
  tail,
} from 'ramda'

const parsers = {
  get: {
    url: split('?') & head,
    body: split('?') & tail & join('') & qs.parse,
  },
  post: {
    body: Buffer.concat.bind(Buffer) & (chunks => chunks.toString('utf8')) & JSON.parse,
  },
}

export default curry((chunks, req) => req
  | cond([
    [propEq('method', 'GET'), ~{
      url: parsers.get.url(req.url),
      body: parsers.get.body(req.url),
    }],
    [propEq('method', 'PUT'), ~{
      url: parsers.get.url(req.url),
      body: parsers.post.body(chunks),
    }],
    [T, ~{ url: req.url, body: parsers.post.body(chunks) }],
  ])
)
