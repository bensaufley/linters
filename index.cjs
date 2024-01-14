// @ts-check
/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended', 'airbnb-base'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {},
};
