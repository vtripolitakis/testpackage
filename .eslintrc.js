module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['airbnb-base', 'prettier'],
  parser: 'esprima',
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 2
  }
};
