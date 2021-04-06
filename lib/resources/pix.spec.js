import runTest from '../../test/runTest'

test('client.pixKeys.createKey', () =>
  runTest({
    connect: {
      api_key: 'abc123',
    },
    subject: client =>
      client.pixKeys.create({ recipient_id: 'abc_123' }),
    method: 'POST',
    url: '/pix/keys',
    body: {
      api_key: 'abc123',
      recipient_id: 'abc_123',
    },
  })
)

test('client.pixKeys.getKeys', () =>
  runTest({
    connect: {
      api_key: 'abc123',
    },
    subject: client =>
      client.pixKeys.all(),
    method: 'GET',
    url: '/pix/keys',
    body: {
      api_key: 'abc123',
    },
  })
)
