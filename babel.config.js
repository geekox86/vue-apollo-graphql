const config = {
  presets: [
    [
      '@babel/env',
      {
        corejs: '3',
        useBuiltIns: 'usage'
      }
    ],
    [
      'babel-preset-proposals',
      {
        all: true,
      }
    ],
    '@vue/jsx'
  ],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '@'
      }
    ]
  ]
}

module.exports = config
