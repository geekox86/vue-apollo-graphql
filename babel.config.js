const config = {
  presets: [
    [
      '@babel/env',
      {
        corejs: '3',
        useBuiltIns: 'usage'
      }
    ],
    '@vue/jsx'
  ]
}

module.exports = config
