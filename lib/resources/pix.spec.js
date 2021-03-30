import runTest from '../../test/runTest'

test('client.pix.createKey', () =>
  runTest({
    connect: {
      api_key: 'abc123',
    },
    subject: client =>
      client.pix.createKey({ recipient_id: 'abc_123' }),
    method: 'POST',
    url: '/pix/keys',
    body: {
      api_key: 'abc123',
      recipient_id: 'abc_123',
    },
  })
)

test('client.pix.getKeys', () =>
  runTest({
    connect: {
      api_key: 'abc123',
    },
    subject: client =>
      client.pix.getKeys(),
    method: 'GET',
    url: '/pix/keys',
    body: {
      api_key: 'abc123',
    },
  })
)
