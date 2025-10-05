# `@bensaufley/eslint-config`

[ESLint] configuration for JS/TS-based projects, with or without a frontend in [Preact].

## Installation

Available as an [npm package](https://www.npmjs.com/package/@bensaufley/eslint-config).

```sh
npm install --save-dev @bensaufley/eslint-config
```

[Peer dependencies] must also be installed:

```sh
npm install --save-dev \
  eslint \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint-config-airbnb-base \
  eslint-config-prettier \
  eslint-import-resolver-typescript \
  eslint-plugin-import \
  eslint-plugin-prefer-arrow-functions \
  eslint-plugin-prettier \
  eslint-plugin-simple-import-sort \
  prettier
```

If you're using Preact, you'll also need to install the relevant peer dependencies:

```sh
npm install --save-dev \
  eslint-config-airbnb \
  eslint-plugin-jsx-a11y \
  eslint-plugin-react \
  eslint-plugin-react-hooks
```

If you're using ESLint 9, you'll need to override `eslint` version in your `package.json` because some of the peer dependencies still depend on ESLint 8:

```json
"overrides": {
  "eslint": ">=9"
}
```

And you'll also need to install the relevant peer dependencies:

```sh
npm install --save-dev \
  @eslint/eslintrc
```

## Usage

### ESLint 8 (Legacy)

In `.eslintrc`:

```js
module.exports = {
  extends: ['@bensaufley'],
};
```

For a Preact environment:

```js
module.exports = {
  extends: [require.resolve('@bensaufley/eslint-config/preact.js')],
};
```

### ESLint 9 ("Flat" Config)

**Note**:

In `eslint.config.js`:

```js
import bslint from '@bensaufley/eslint-config';

export default [...bslint];
```

For a Preact environment:

```js
import bslintPreact from '@bensaufley/eslint-config/preact.js';

export default [...bslintPreact];
```

[eslint]: https://eslint.org/
[preact]: https://preactjs.com/
[peer dependencies]: https://docs.npmjs.com/cli/v7/configuring-npm/package-json#peerdependencies
