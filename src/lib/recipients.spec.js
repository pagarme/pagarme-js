import runTest from '../../test/runTest'
import Promise from 'bluebird'
import { merge } from 'ramda'

const findOptions = {
  connect: {
    api_key:  'abc123'
  },
  method: 'GET',
  body: {
    api_key: 'abc123',
  },
}

test('client.recipients.find', () => {
  const find = runTest(merge(findOptions, {
    subject: client => client.recipients.find({ id: 1337 }),
      url: '/recipients/1337',
  }))

  const findAll = runTest(merge(findOptions, {
    subject: client => client.recipients.find({ count: 10, page: 2 }),
    url: '/recipients',
  }))

  const findAllAlias = runTest(merge(findOptions, {
    subject: client => client.recipients.all({ count: 10, page: 2 }),
    url: '/recipients',
  }))

  return Promise.props({
    find,
    findAll,
    findAllAlias,
  })
})

test('client.recipients.create', () => {
  return runTest({
    connect: {
      api_key: 'abc123',
    },
    subject: client => client.recipients.create({ name: 'Deric' }),
    method: 'POST',
    url: '/recipients',
    body: {
      api_key: 'abc123',
      name: 'Deric',
    },
  })
})

test('client.recipients.update', () => {
  return runTest({
    connect: {
      api_key: 'abc123',
    },
    subject: client => client.recipients.update({ id: 1234 }),
    method: 'PUT',
    url: '/recipients/1234',
    body: {
      api_key: 'abc123',
    },
  })
})

test('client.recipients.balance', () => {
  return runTest({
    connect: {
      api_key: 'abc123',
    },
    subject: client => client.recipients.balance({ id: 1234 }),
    method: 'GET',
    url: '/recipients/1234/balance',
    body: {
      api_key: 'abc123',
    },
  })
})

