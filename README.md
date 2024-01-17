# `@bensaufley/linters`

A collection of linting configs that I just find myself setting up over and over again and I'd like to be able to just install from somewhere and go. Intended for JS/TS-based projects, with or without a frontend in [Preact].

## Installation

Available as an [npm package](https://www.npmjs.com/package/@bensaufley/linters).

```sh
npm install --save-dev @bensaufley/linters
```

[Peer dependencies] must also be installed:

```sh
npm install --save-dev eslint eslint-config-prettier eslint-plugin-import eslint-plugin-prettier prettier
```

If you're using Preact, you'll also need to install the relevant peer dependencies:

```sh
npm install --save-dev eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

## Usage

In `.eslintrc`:
  
```json
{
  "extends": ["@bensaufley/linters"]
}
```

For a Preact environment:

```json
{
  "extends": ["@bensaufley/linters/preact"]
}
```

[preact]: https://preactjs.com/
[peer dependencies]: https://docs.npmjs.com/cli/v7/configuring-npm/package-json#peerdependencies
