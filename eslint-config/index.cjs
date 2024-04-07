// @ts-check

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'eslint-config-airbnb-base', 'plugin:prettier/recommended'],
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['prefer-arrow-functions', 'simple-import-sort'],
  rules: {
    /**
     * Things I just want to do differently from the recommended rules
     */
    curly: ['error', 'multi-line', 'consistent'],
    'no-continue': 'off',
    'no-plusplus': 'off',
    'prefer-const': ['error', { destructuring: 'all' }],
    'prefer-arrow-functions/prefer-arrow-functions': ['error', { returnStyle: 'implicit' }],

    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
    ],
    '@typescript-eslint/no-import-type-side-effects': ['error'],

    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/prefer-namespace-keyword': 'off',
    '@typescript-eslint/no-namespace': 'off',

    'no-unused-vars': ['error', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],

    /**
     * Import sorting
     */
    'import/order': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'], // Side effect imports
          ['^@?\\w'], // NPM Packages
          ['^~(?!.*\\.module\\.css$)'], // Tilde (aliased) imports
          ['^\\.\\./(?!.*\\.module\\.css$)'], // Relative imports
          ['^\\./(?!.*\\.module\\.css$)', '^\\.$'], // Current-directory imports
          ['^~.*\\.module\\.css', '\\.module\\.css$'], // CSS Modules imports
        ],
      },
    ],
    'simple-import-sort/exports': 'error',

    /**
     * Handled by Prettier
     */
    'max-len': 'off',
    'object-curly-newline': 'off',
    'trailing-comma': 'off',
    'import/extensions': [
      'error',
      'always',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        /**
         * JS rules duplicated by @typescript-eslint
         */
        'no-unused-vars': 'off',
        'no-useless-constructor': 'off',
        'no-shadow': 'off',

        '@typescript-eslint/no-useless-constructor': 'error',

        /**
         * Rules rendered unnecessary by TS
         */
        'no-undef': 'off',
        'default-case': 'off',
      },
    },
  ],
};
