module.exports = (entry) => {
  if (entry.stylus) {
    const cacheLoader = require('../loaders/cache-loader')
    const cssLoader = require('../loaders/css-loader')
    const miniCssExtractLoader = require('../loaders/mini-css-extract-loader')
    const extractCssChunksWebpackLoader = require('../loaders/extract-css-chunks-webpack-loader')
    const postcssLoader = require('../loaders/postcss-loader')
    const styleLoader = require('../loaders/style-loader')
    const stylusLoader = require('../loaders/stylus-loader')
    const vueStyleLoader = require('../loaders/vue-style-loader')

    return {
      test: /\.styl(us)?$/,
      use: [
        styleLoader(entry),
        vueStyleLoader(entry),
        miniCssExtractLoader(entry),
        extractCssChunksWebpackLoader(entry),
        cacheLoader(entry),
        cssLoader(entry, entry.postcss ? 2 : 1),
        postcssLoader(entry),
        stylusLoader(entry)
      ].filter((loader) => loader)
    }
  }
}
