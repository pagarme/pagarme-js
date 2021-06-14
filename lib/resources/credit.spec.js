import { merge } from 'ramda'
import runTest from '../../test/runTest'

const findOptions = {
  connect: {
    api_key: 'ak_test_dev',
  },
  method: 'GET',
  body: {
    api_key: 'ak_test_dev',
  },
}

test('client.credit.creditLines.all', () =>
  runTest(merge(findOptions, {
    subject: client => client.credit.creditLines.all(),
    url: '/credit/credit_lines',
  }))
)

test('client.credit.proposals.findOne', () =>
  runTest(merge(findOptions, {
    subject: client => client.credit.proposals.findOne({
      creditLineId: '123',
      proposalId: '456',
    }),
    url: '/credit/credit_lines/123/proposals/456',
  }))
)

test('client.credit.proposals.create', () =>
  runTest(merge(findOptions, {
    subject: client => client.credit.proposals.create({
      creditLineId: '123',
      amount: 2300,
    }),
    url: '/credit/credit_lines/123/proposals',
    method: 'POST',
    body: {
      amount: 2300,
      api_key: 'ak_test_dev',
    },
  }))
)

test('client.credit.proposals.accept', () =>
  runTest(merge(findOptions, {
    subject: client => client.credit.proposals.accept({
      creditLineId: '123',
      proposalId: '456',
    }),
    url: '/credit/credit_lines/123/proposals/456/accept',
    method: 'POST',
  }))
)

test('client.credit.proposals.settlementForecast', () =>
  runTest(merge(findOptions, {
    subject: client => client.credit.proposals.settlementForecast({
      creditLineId: '123',
      proposalId: '456',
    }),
    url: '/credit/credit_lines/123/proposals/456/settlement_forecast',
  }))
)

test('client.credit.loans.findAll', () => {
  runTest(merge(findOptions, {
    subject: client => client.credit.loans.all(),
    url: '/credit/loans',
  }))

  runTest(merge(findOptions, {
    subject: client => client.credit.loans.find(),
    url: '/credit/loans',
  }))
})

test('client.credit.loans.find', () =>
  runTest(merge(findOptions, {
    subject: client => client.credit.loans.find({
      loanId: '123',
    }),
    url: '/credit/loans/123',
  }))
)

test('client.credit.statements.findDaily', () =>
  runTest(merge(findOptions, {
    subject: client => client.credit.statements.findDaily({
      loanId: '123',
      count: '10',
      page: '1',
    }),
    url: '/credit/loans/123/statements/daily',
    body: {
      api_key: 'ak_test_dev',
      count: '10',
      page: '1',
    },
  }))
)

test('client.credit.statements.findMonthly', () =>
  runTest(merge(findOptions, {
    subject: client => client.credit.statements.findMonthly({
      loanId: '123',
      count: '10',
      page: '27',
    }),
    url: '/credit/loans/123/statements/monthly',
    body: {
      api_key: 'ak_test_dev',
      count: '10',
      page: '27',
    },
  }))
)
