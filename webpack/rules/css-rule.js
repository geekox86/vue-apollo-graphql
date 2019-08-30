module.exports = (entry) => {
  if (entry.css) {
    const cacheLoader = require('../loaders/cache-loader')
    const cssLoader = require('../loaders/css-loader')
    const extractCssChunksWebpackLoader = require('../loaders/extract-css-chunks-webpack-loader')
    const miniCssExtractLoader = require('../loaders/mini-css-extract-loader')
    const styleLoader = require('../loaders/style-loader')
    const vueStyleLoader = require('../loaders/vue-style-loader')

    return {
      test: /\.css$/,
      use: [
        miniCssExtractLoader(entry),
        extractCssChunksWebpackLoader(entry),
        cacheLoader(entry),
        styleLoader(entry),
        vueStyleLoader(entry),
        cssLoader(entry, 0)
      ].filter((loader) => loader)
    }
  }
}
