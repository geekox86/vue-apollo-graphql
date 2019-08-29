const config = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
    serviceworker: true,
    worker: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    ecmaVersion: '2019',
    ecmaFeatures: {
      globalReturn: true,
      impliedStrict: true,
      jsx: true
    },
    extraFileExtensions: ['.vue']
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'indent': ['error', 2],
    '@typescript-eslint/indent': ['error', 2]
  }
}

module.exports = config
