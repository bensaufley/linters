// @ts-check
import { FlatCompat } from '@eslint/eslintrc';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

import main from './index.mjs';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  resolvePluginsRelativeTo: import.meta.dirname,
});

const config = defineConfig(
  ...main,
  ...compat.extends('airbnb/rules/react', 'airbnb/rules/react-a11y'),
  // @ts-ignore
  pluginReact.configs['jsx-runtime'],
  eslintConfigPrettier,
  {
    plugins: {
      'react-hooks': pluginReactHooks,
      'jsx-a11y': pluginJsxA11y,
      react: pluginReact,
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
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
    settings: {
      'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
      react: {
        pragma: 'h',
        version: '18.2.0',
      },
    },
  },
  {
    files: ['*.tsx', '**/*.tsx'],
    rules: {
      'react/prop-types': 'off',

      'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx', '.js', '.jsx'] }],
    },
  },
);

export default config;
