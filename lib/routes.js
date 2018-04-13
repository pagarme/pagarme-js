const base = 'https://api.pagar.me:443/1'

const session = {
  base: '/sessions',
  destroy: id => `/sessions/${id}`,
  verify: id => `/sessions/${id}/verify`,
}

const transactions = {
  base: '/transactions',
  cardHashKey: '/transactions/card_hash_key',
  calculateInstallmentsAmount: '/transactions/calculate_installments_amount',
  details: id => `/transactions/${id}`,
  refund: id => `/transactions/${id}/refund`,
  capture: id => `/transactions/${id}/capture`,
  collectPayment: id => `/transactions/${id}/collect_payment`,
  antifraudAnalyses: {
    findAll: id => `/transactions/${id}/antifraud_analyses`,
    find: (id, antifraudId) => `/transactions/${id}/antifraud_analyses/${antifraudId}`,
  },
}

const payables = {
  base: '/payables',
  transaction: transactionId => `/transactions/${transactionId}/payables`,
  find: id => `/payables/${id}`,
}

const invites = {
  base: '/invites',
  details: id => `/invites/${id}`,
}

const recipients = {
  base: '/recipients',
  details: id => `/recipients/${id}`,
}

const bulkAnticipations = {
  base: recipientId => `/recipients/${recipientId}/bulk_anticipations`,
  details: (recipientId, id) => `/recipients/${recipientId}/bulk_anticipations/${id}`,
  limits: recipientId => `/recipients/${recipientId}/bulk_anticipations/limits`,
  days: (recipientId, id) => `/recipients/${recipientId}/bulk_anticipations/${id}/days`,
  confirm: (recipientId, id) => `/recipients/${recipientId}/bulk_anticipations/${id}/confirm`,
  cancel: (recipientId, id) => `/recipients/${recipientId}/bulk_anticipations/${id}/cancel`,
}

const search = '/search'

const user = {
  base: '/users',
  resetPassword: '/users/reset_password',
  redefinePassword: '/users/redefine_password',
  details: id => `/users/${id}`,
  updatePassword: id => `/users/${id}/update_password`,
  singular: '/user',
}

const company = {
  basePlural: '/companies',
  base: '/company',
  temporary: '/companies/temporary',
  activate: '/companies/activate',
  resetKeys: '/company/reset_keys',
  affiliationProgress: '/company/affiliation_progress',
  branding: id => `/company/branding/${id}`,
  emailTemplates: id => `/company/email_templates/${id}`,
}

const splitRules = {
  findAll: transactionId => `/transactions/${transactionId}/split_rules`,
  find: (transactionId, splitId) => `/transactions/${transactionId}/split_rules/${splitId}`,
}

const antifraudAnalyses = {
  findAll: transactionId => `/transactions/${transactionId}/antifraud_analyses`,
  find: (transactionId, antifraudId) => `/transactions/${transactionId}/antifraud_analyses/${antifraudId}`,
}

const bankAccounts = {
  base: '/bank_accounts',
  details: id => `/bank_accounts/${id}`,
}

const plans = {
  base: '/plans',
  details: id => `/plans/${id}`,
}

const acquirersConfigurations = {
  base: '/acquirers_configurations',
  details: id => `/acquirers_configuration/${id}`,
}

const acquirers = {
  base: '/acquirers',
  details: id => `/acquirer/${id}`,
}

const subscriptions = {
  base: '/subscriptions',
  details: id => `/subscriptions/${id}`,
  cancel: id => `/subscriptions/${id}/cancel`,
  transactions: id => `/subscriptions/${id}/transactions`,
}

const chargebacks = '/chargebacks'

const cards = {
  base: '/cards',
  details: id => `/cards/${id}`,
}

const transfers = {
  base: '/transfers',
  details: id => `/transfers/${id}`,
  days: '/transfers/days',
  limits: '/transfers/limits',
  cancel: id => `/transfers/${id}/cancel`,
}

const balance = {
  base: '/balance',
  recipient: id => `/recipients/${id}/balance`,
  summary: recipientId => `/recipients/${recipientId}/balance/summary`,
}

const balanceOperations = {
  base: '/balance/operations',
  days: '/balance/operations/days',
  details: id => `/balance/operations/${id}`,
  recipients: {
    findAll: recipientId => `/recipients/${recipientId}/balance/operations`,
    find: (id, recipientId) => `/recipients/${recipientId}/balance/operations/${id}`,
    findWithFormat: (recipientId, format) => `/recipients/${recipientId}/balance/operations.${format}`,
  },
}

const events = {
  base: '/events',
  transaction: transactionId => `/transactions/${transactionId}/events`,
  transactionDetails: (id, transactionId) => `/transactions/${transactionId}/events/${id}`,
  subscription: subscriptionId => `/subscriptions/${subscriptionId}/events`,
  subscriptionDetails: (id, subscriptionId) => `/subscriptions/${subscriptionId}/events/${id}`,
}

const gatewayOperations = {
  transaction: transactionId => `/transactions/${transactionId}/operations`,
  transactionDetails: (id, transactionId) => `/transactions/${transactionId}/operations/${id}`,
  subscription: subscriptionId => `/subscriptions/${subscriptionId}/operations`,
  refuseMessage: (subscriptionId, id) => `/subscriptions/${subscriptionId}/operations/${id}/refuse_message`,
}

const chargebackOperations = {
  transaction: transactionId => `/transactions/${transactionId}/chargeback_operations`,
}

const postbacks = {
  transaction: transactionId => `/transactions/${transactionId}/postbacks`,
  transactionDetails: (id, transactionId) => `/transactions/${transactionId}/postbacks/${id}`,
  subscription: subscriptionId => `/subscriptions/${subscriptionId}/postbacks`,
  redeliver: (subscriptionId, id) => `/subscriptions/${subscriptionId}/postbacks/${id}/redeliver`,
}

const customers = {
  base: '/customers',
  details: id => `/customers/${id}`,
}

const zipcodes = {
  details: zipcode => `/zipcodes/${zipcode}`,
}

const status = '/status'

export default {
  acquirers,
  chargebacks,
  acquirersConfigurations,
  antifraudAnalyses,
  balance,
  balanceOperations,
  bankAccounts,
  base,
  bulkAnticipations,
  cards,
  chargebackOperations,
  company,
  events,
  gatewayOperations,
  invites,
  payables,
  plans,
  postbacks,
  recipients,
  search,
  session,
  splitRules,
  subscriptions,
  transactions,
  transfers,
  user,
  customers,
  zipcodes,
  status,
}
