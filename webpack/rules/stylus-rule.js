module.exports = (entry) => {
  if (entry.stylus) {
    const styleLoader = require('../loaders/style-loader')
    const vueStyleLoader = require('../loaders/vue-style-loader')
    const miniCssExtractLoader = require('../loaders/mini-css-extract-loader')
    const cssLoader = require('../loaders/css-loader')
    const postcssLoader = require('../loaders/postcss-loader')
    const stylusLoader = require('../loaders/stylus-loader')

    return {
      test: /\.styl(us)?$/,
      use: [
        styleLoader(entry),
        vueStyleLoader(entry),
        miniCssExtractLoader(entry),
        cssLoader(entry, 2),
        postcssLoader(entry),
        stylusLoader(entry)
      ].filter((loader) => loader)
    }
  }
}
