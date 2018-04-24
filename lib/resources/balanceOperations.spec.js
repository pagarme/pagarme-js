import Promise from 'bluebird'
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

test('client.balanceOperations.find', () => {
  const find = runTest(merge(findOptions, {
    subject: client => client.balanceOperations.find({ id: 1337 }),
    url: '/balance/operations/1337',
  }))

  const findAll = runTest(merge(findOptions, {
    subject: client => client.balanceOperations.find({
      count: 10,
      page: 2,
      status: 'available',
    }),
    url: '/balance/operations',
  }))

  const findRecipients = runTest(merge(findOptions, {
    subject: client => client.balanceOperations.find({ recipientId: 1234 }),
    url: '/recipients/1234/balance/operations',
  }))

  const findRecipientsWithBalanceId = runTest(merge(findOptions, {
    subject: client => client.balanceOperations.find({ id: 8528, recipientId: 1234 }),
    url: '/recipients/1234/balance/operations/8528',
  }))

 const findRecipientsWithFormat = runTest(merge(findOptions, {
    subject: client => client.balanceOperations.find({ recipientId: 1234, format: 'csv' }),
    url: '/recipients/1234/balance/operations.csv',
  }))

  return Promise.props({
    find,
    findAll,
    findRecipients,
    findRecipientsWithBalanceId,
    findRecipientsWithFormat,
  })
})

test('client.balanceOperations.all', () => {
  return runTest(merge(findOptions, {
    subject: client => client.balanceOperations.all(),
    url: '/balance/operations',
  }))
})

test('client.balanceOperations.days', () => {
  return runTest(merge(findOptions, {
    subject: client => client.balanceOperations.days({
      recipient_id: 'abc1234',
      status: 'available',
    }),
    url: '/balance/operations/days',
  }))
})
