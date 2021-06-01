import { merge } from 'ramda'
import runTest from '../../test/runTest'

const findOptions = {
  connect: {
    api_key: 'abc123',
  },
  body: {
    api_key: 'abc123',
  },
}

test('client.settlements.all', () =>
  runTest(merge({
    subject: client =>
      client.settlements.all({
        recipientId: 'abc_123',
        page: 1,
        count: 1,
      }),
    method: 'GET',
    url: '/recipients/abc_123/settlements',
  }, findOptions))
)

test('client.settlements.contracts.all', () =>
  runTest(merge({
    subject: client =>
      client.settlements.contracts.all({
        recipientId: 'abc_123',
        page: 1,
        count: 1,
      }),
    method: 'GET',
    url: '/recipients/abc_123/settlements/contracts',
  }, findOptions))
)
