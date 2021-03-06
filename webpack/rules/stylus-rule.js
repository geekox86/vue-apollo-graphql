module.exports = (entry) => {
  if (entry.stylus) {
    const cacheLoader = require('../loaders/cache-loader')
    const cssLoader = require('../loaders/css-loader')
    const miniCssExtractLoader = require('../loaders/mini-css-extract-loader')
    const extractCssChunksWebpackLoader = require('../loaders/extract-css-chunks-webpack-loader')
    const styleLoader = require('../loaders/style-loader')
    const stylusLoader = require('../loaders/stylus-loader')
    const vueStyleLoader = require('../loaders/vue-style-loader')

    return {
      test: /\.styl(us)?$/,
      use: [
        miniCssExtractLoader(entry),
        extractCssChunksWebpackLoader(entry),
        cacheLoader(entry),
        styleLoader(entry),
        vueStyleLoader(entry),
        cssLoader(entry, 1),
        stylusLoader(entry)
      ].filter((loader) => loader)
    }
  }
}
