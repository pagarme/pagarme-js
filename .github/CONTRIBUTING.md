# Contributing

Thank's for you interest in contributing! :tada::+1:

This are the common guidelines to contribute to `pagarme-js`. Please ensure the following guidelines are being followed by you and any other contributor.

## Code of conduct

This project and everyone participating in it is governed by the [Pagar.me Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [dashboard@pagar.me](mailto:dashboard@pagar.me).

## How can I contribute?

Help us maintaining this project by reporting bugs, improving our codebase, creating more documentation and submiting new pull requests for features you would like to see in this project.

## Guidelines :rotating_light:

### Speak English

English is an universal language used across the world and in the vast majority of tools and coding vocabulary.

### Write good commit messages

We follow the [pagarme/git-style-guide](https://github.com/pagarme/git-style-guide). Every commit/branch/pull_request must follow its guidelines.

### How to report a bug

If you find a security vulnerability, do NOT open an issue. Email [dashboard@pagar.me](mailto:dashboard@pagar.me) instead.

When reporting a bug make sure to include:
- The project version you are running
- Your OS
- Node.js version
- Steps to reproduce
- Current and expected behavior

### Code style

Make sure that when writing code you are following [Pagarme's style guide](https://github.com/pagarme/javascript-style-guide)

## Contributing

> We provide source maps to ease debugging. Use them whenever possible when providing stack traces as it will make digging onto the issue easier.

Fork the repo and clone it in your machine: `git clone git@github.com:YOUR_USERNAME/pagarme-js.git`

#### Install the dependencies

```sh
yarn
```

or

```sh
npm i
```

#### Make sure the tests are passing

> To run tests, you need to export API_KEY environment variable with your API key. When submitting a PR, Travis will already have it exported.

```sh
yarn test
```

or

```sh
npm run test
```

#### Build the project

```sh
yarn start
```

or

```sh
npm start
```

- Node.js build is produced inside the dist directory.
- Browser build is produced inside the browser directory.

#### Opening your PR

- Make sure the tests still passes (and that you added new ones if needed)
- Fill the PR template when opening it trough GitHub
- Include screenshots and animated GIFs whenever possible.

If in doubt, just send us a PR or open an issue to discussion! We're always happy for receiving contributions!
