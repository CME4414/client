/* eslint-disable sort-keys */
module.exports = {
  extends: 'airbnb',
  env: {
    'jest/globals': true,
  },
  parser: 'babel-eslint',
  plugins: [
    'import',
    'jest',
    'react',
    'react-hooks',
    'sort-destructure-keys',
  ],
  globals: {
    document: true,
    window: true,
    fetch: true,
    // for e2e and jest tests
    page: true,
    debugPage: true,
    resetPage: true,
    serverAddress: true,
    // for enzyme
    shallow: true,
    mount: true,
    render: true,
    unmount: true,
  },
  rules: {
    'arrow-body-style': 0,
    'arrow-parens': ['error', 'as-needed'],
    'class-methods-use-this': 0,
    complexity: ['error', 20],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],
    'consistent-return': 0,
    'linebreak-style': 0,
    'max-len': ['error', { code: 1000, tabWidth: 2 }],
    'max-lines': ['error', { max: 1000, skipComments: true }],
    'max-statements': ['error', 40, { ignoreTopLevelFunctions: true }],
    'no-case-declarations': 0,
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-continue': 0,
    'no-else-return': ['error', { allowElseIf: true }],
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 0,
    'no-useless-rename': 0,
    'no-var': 0,
    'object-shorthand': 0,
    'operator-assignment': 0,
    'sort-destructure-keys/sort-destructure-keys': 2,
    'sort-keys': ['error', 'asc', { natural: true }],
    'vars-on-top': 0,

    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,

    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',

    'jsx-a11y/img-has-alt': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/label-has-associated-control': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-danger': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-boolean-value': 0,
    'react/jsx-closing-tag-location': 2,
    'react/jsx-curly-newline': [2, {
      multiline: 'forbid',
      singleline: 'forbid',
    }],
    'react/jsx-curly-spacing': [2, 'never'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-indent': [2, 2, { checkAttributes: false, indentLogicalExpressions: true }],
    'react/jsx-key': 2,
    'react/jsx-max-props-per-line': [1, { maximum: 1, when: 'always' }],
    'react/jsx-no-target-blank': 0,
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': ['error', {
      ignoreCase: true,
      reservedFirst: true,
    }],
    'react-hooks/rules-of-hooks': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
};
