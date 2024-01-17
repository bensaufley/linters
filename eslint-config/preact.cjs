// @ts-check

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['./index.cjs', 'eslint-config-airbnb/rules/react', 'eslint-config-airbnb/rules/react-a11y'].map((f) =>
    require.resolve(f),
  ),
  env: {
    browser: true,
  },
  rules: {
    /**
     * Things I just want to do differently from the recommended rules
     */
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',

    /**
     * Adjustments for a Preact environment
     */
    'react/no-unknown-property': 'off', // Doesn't play nice with Preact
    'jsx-a11y/label-has-associated-control': 'off', // Doesn't support Preact's `for` attribute
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        'react/prop-types': 'off',

        // '<T extends any>' is required in TSX files and this is not configurable
        '@typescript-eslint/no-unnecessary-type-constraint': 'off',
      },
    },
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    react: {
      pragma: 'h',
      version: '18.2.0',
    },
  },
};
