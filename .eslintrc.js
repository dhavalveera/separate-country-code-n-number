module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
    es6: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: [
    'prettier',
    'plugin:prettier/recommended',
    'plugin:json/recommended',
  ],
  plugins: ['prettier'],
}
