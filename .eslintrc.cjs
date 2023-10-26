module.exports = {
  root: true,
  env: {browser: true, es2020: true, jest: true, node: true},
  globals: {'vi': true},
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended', 'plugin:storybook/recommended'],
  parserOptions: {ecmaVersion: 2020, sourceType: 'module'},
  settings: {react: {version: '18.2'}},
  plugins: ['react-refresh'],
  rules: {
    'react/prop-types': 'off',
    'react-refresh/only-export-components': [
      'warn',
      {allowConstantExport: true},
    ],
  },
}
