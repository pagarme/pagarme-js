<img src="https://cdn.rawgit.com/pagarme/brand/9ec30d3d4a6dd8b799bca1c25f60fb123ad66d5b/logo-circle.svg" width="127px" height="127px" align="left"/>

# Pagar.me Javascript

A JavaScript library to interface with Pagar.me's API, it works in the browser
and with Node.js.

<br>

## Description

This library covers all your needs for integrating with Pagar.me, providing:

* A clean Promise-based interface for all endpoints in Pagarme's API
* A fast way to generate card hashes
* Postback signature validation
* Documents validations (CPF, CNPJ, and others)

## How to use

First, install it:

```bash
yarn add pagarme
```

Or using npm:

```bash
npm install pagarme
```

Pagar.me's JavaScript library can be used in three ways:

### Node.js

Import like usual:

```js
import pagarme from 'pagarme'
```

also works using `require`:

```js
const pagarme = require('pagarme')
```

### Browser (CommonJS)

Import the browser build:

```js
import pagarme from 'pagarme/browser'
```

also works using `require`:

```js
const pagarme = require('pagarme/browser')
```

### Browser (Global Variable)

You can also use the latest release from our CDN and import the build
directly in your HTML:

```html
<script src="https://assets.pagar.me/pagarme-js/3.0/pagarme.min.js" />
```

The library will be available as the global variable `pagarme`.

## API Docs

This library provides a promise based interface for all functions. Before you
can use the library, you need to provide authentication details which will be
used through API calls.

For a detailed documentation, see our [JSDocs](https://pagarme.github.io/pagarme-js).

### Client API

All of Pagar.me's REST API endpoints are covered in the `client` object. Every
function call issued to `client` will return a `Promise` which represents and
manages the result's lifecycle.

### Using `connect`

When you call `connect`, a `Promise` which resolves to a `client` or an
error will be returned. If an authentication error happens, you can catch
the error with the `Promise` interface:

```javascript
import pagarme from 'pagarme'

pagarme.client.connect({ email: 'user@email.com', password: '123456' })
  .then(client => client.transactions.all())
  .then(transactions => console.log(transactions))
  .catch(error => console.error(error))
```

As the entire library is based on promises, you can also use ES6 generators
with every call to make code more procedural:

```javascript
import pagarme from 'pagarme'

try {
  const client = yield pagarme.client.connect({
    email: 'user@email.com',
    password: '123456'
  })
} catch (err) {
  console.log('Authentication error')
}

try {
  const transactions = yield client.transactions.all()
  console.log(transactions)
} catch (err) {
  console.log('Error fetching transactions')
}
```

The downside of this approach is that you need to handle errors using try/catch.

Pagar.me authorizes clients in various fashions. This library handles all
available authentication strategies:

#### Using API key:

```javascript
import pagarme from 'pagarme'

pagarme.client.connect({ api_key: 'ak_test_y7jk294ynbzf93' })
  .then(client => client.transactions.all())
  .then(transactions => console.log(transactions))
```

> :warning: Never use API keys in the browser, you should use encryption keys instead.

#### Using encryption key:

```javascript
import pagarme from 'pagarme'

const card = {
  card_number: '4111111111111111',
  card_holder_name: 'abc',
  card_expiration_date: '1225',
  card_cvv: '123',
}

pagarme.client.connect({ encryption_key: 'ek_test_y7jk294ynbzf93' })
  .then(client => client.security.encrypt(card))
  .then(card_hash => console.log(card_hash))
```

#### Using email and password:

```javascript
import pagarme from 'pagarme'

pagarme.client.connect({ email: 'user@email.com', password: '123456' })
  .then(client => client.transactions.all())
  .then(transactions => console.log(transactions))
```

## Building

To build the library, use `npm start`.

* Node.js build is produced inside the `dist` directory.
* Browser build is produced inside the `browser` directory.

## Testing

To run the library tests, use `npm test`.

>To run tests, you need to export `API_KEY` environment variable with your
API key. When submitting a PR, Travis will already have it exported.

## Contributing

Community contributions are essential for keeping this library great. We
simply can't access the huge number of platforms and myriad configurations
for running it, so if you find any problems, feel free to open an issue.

Be sure to provide at least the following information on the issue:

* Environment (e.g. Node 7, Chrome 57)
* Operating System (e.g. iOS 10)
* Library version (e.g. 3.0.0)

We provide source maps to ease debugging. Use them whenever possible when
providing stack traces as it will make digging onto the issue easier.

## License

```
The MIT License (MIT)
Copyright (c) 2017 Pagar.me Pagamentos S/A
```

