import runTest from '../../test/runTest'

test('client.company.activate', () =>
  runTest({
    connect: {
      api_key: 'abc123',
    },
    subject: client => client.company.activate(),
    method: 'POST',
    url: '/companies/activate',
    body: {
      api_key: 'abc123',
    },
  })
)

test('client.company.affiliationProgress', () =>
  runTest({
    connect: {
      api_key: 'abc123',
    },
    subject: client => client.company.affiliationProgress(),
    method: 'GET',
    url: '/company/affiliation_progress',
    body: {
      api_key: 'abc123',
    },
  })
)

test('client.company.create', () =>
  runTest({
    connect: {
      api_key: 'abc123',
    },
    subject: client => client.company.create({
      name: 'Richard Roupas',
    }),
    method: 'POST',
    url: '/companies',
    body: {
      api_key: 'abc123',
      name: 'Richard Roupas',
    },
  })
)

test('client.company.createTemporary', () =>
  runTest({
    connect: {
      api_key: 'abc123',
    },
    subject: client => client.company.createTemporary({
      potato: 'yes',
    }),
    method: 'POST',
    url: '/companies/temporary',
    body: {
      api_key: 'abc123',
      potato: 'yes',
    },
  })
)

test('client.company.current', () =>
  runTest({
    connect: {
      api_key: 'abc123',
    },
    subject: client => client.company.current(),
    method: 'GET',
    url: '/company',
    body: {
      api_key: 'abc123',
    },
  })
)

test('client.company.emailTemplates.find', () =>
  runTest({
    connect: {
      api_key: 'abc123',
    },
    subject: client => client.company.emailTemplates.find({ id: 1234 }),
    method: 'GET',
    url: '/company/email_templates/1234',
    body: {
      api_key: 'abc123',
    },
  })
)

test('client.company.emailTemplates.update', () =>
  runTest({
    connect: {
      api_key: 'abc123',
    },
    subject: client => client.company.emailTemplates.update({ id: 4321 }),
    method: 'PUT',
    url: '/company/email_templates/4321',
    body: {
      api_key: 'abc123',
    },
  })
)

test('client.company.resetKeys', () =>
  runTest({
    connect: {
      api_key: 'abc123',
    },
    subject: client => client.company.resetKeys(),
    method: 'PUT',
    url: '/company/reset_keys',
    body: {
      api_key: 'abc123',
    },
  })
)

test('client.company.update', () =>
  runTest({
    connect: {
      api_key: 'abc123',
    },
    subject: client => client.company.update(),
    method: 'PUT',
    url: '/company',
    body: {
      api_key: 'abc123',
    },
  })
)


test('client.company.updateBranding', () =>
  runTest({
    connect: {
      api_key: 'abc123',
    },
    subject: client => client.company.updateBranding({ id: 1234 }),
    method: 'PUT',
    url: '/company/branding/1234',
    body: {
      api_key: 'abc123',
    },
  })
)

test('client.company.emailConfirmation', () =>
  runTest({
    connect: {
      api_key: 'abc123',
    },
    subject: client => client.company.emailConfirmation({ email: 'teste@pagar.me' }),
    method: 'POST',
    url: '/company/email_confirmation',
    body: {
      email: 'teste@pagar.me',
    },
  })
)

test('client.company.fees', () =>
  runTest({
    connect: {
      api_key: 'abc123',
    },
    subject: client => client.company.fees(),
    method: 'GET',
    url: '/company/fees',
    body: {
      api_key: 'abc123',
    },
  })
)

test('client.company.updateAnticipation', () =>
  runTest({
    connect: {
      api_key: 'abc123',
    },
    subject: client => client.company.updateAnticipation({
      enabled: true,
      delay: 15,
    }),
    method: 'PUT',
    url: '/company/anticipation',
    body: {
      api_key: 'abc123',
      enabled: true,
      delay: 15,
    },
  })
)

test('client.company.anticipationOptions', () =>
  runTest({
    connect: {
      api_key: 'abc123',
    },
    subject: client => client.company.anticipationOptions(),
    method: 'GET',
    url: '/company/anticipation/options',
    body: {
      api_key: 'abc123',
    },
  })
)

test('client.company.apiKey', () =>
  runTest({
    connect: {
      api_key: 'abc123',
    },
    subject: client => client.company.apiKey(),
    method: 'GET',
    url: '/company/api_key',
    body: {
      api_key: 'abc123',
    },
  })
)
