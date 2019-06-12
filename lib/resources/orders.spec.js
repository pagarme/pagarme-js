import { merge } from 'ramda'

import runTest from '../../test/runTest'

test('client.orders.create', () =>
  runTest({
    connect: {
      api_key: 'abc123',
    },
    subject: client => client.orders.create({
      company_id: '1234',
      items: [
        {
          id: '1',
          title: 'Bola de futebol',
          unit_price: 400,
          quantity: 1,
          tangible: true,
        },
        {
          id: 'a123',
          title: 'Caderno do Goku',
          unit_price: 600,
          quantity: 1,
          tangible: true,
        },
      ],
      amount: 1000,
      payment_link_id: 1234,
    }),
    method: 'POST',
    url: '/orders',
    body: {
      api_key: 'abc123',
      company_id: '1234',
      items: [
        {
          id: '1',
          title: 'Bola de futebol',
          unit_price: 400,
          quantity: 1,
          tangible: true,
        },
        {
          id: 'a123',
          title: 'Caderno do Goku',
          unit_price: 600,
          quantity: 1,
          tangible: true,
        },
      ],
      amount: 1000,
      payment_link_id: 1234,
    },
  })
)

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

test('client.orders.find', () =>
  runTest(merge(findOptions, {
    subject: client => client.orders.find({ id: 1337 }),
    url: '/orders/1337',
  }))
)
