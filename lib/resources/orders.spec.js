import { merge } from 'ramda'

import runTest from '../../test/runTest'

const findOptions = {
  connect: {
    api_key: 'abc123',
  },
  method: 'GET',
  body: {
    api_key: 'abc123',
  },
}

test('client.orders.all', () =>
  runTest(merge(findOptions, {
    subject: client => client.orders.all({ count: 10, page: 2 }),
    url: '/orders',
  }))
)
