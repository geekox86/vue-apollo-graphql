const config = {
  extends: ['plugin:@typescript-eslint/recommended', 'eslint:recommended'],
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
    ecmaVersion: 2019,
    ecmaFeatures: {
      globalReturn: true,
      impliedStrict: true,
      jsx: true
    }
  },
  plugins: ['@typescript-eslint']
}

module.exports = config
