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
      "babel-preset-proposals",
      {
        "all": true,
      }
    ],
    '@vue/jsx'
  ]
}

module.exports = config
