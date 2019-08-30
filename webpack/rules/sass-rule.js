module.exports = (entry) => {
  if (entry.sass) {
    const cacheLoader = require('../loaders/cache-loader')
    const cssLoader = require('../loaders/css-loader')
    const extractCssChunksWebpackLoader = require('../loaders/extract-css-chunks-webpack-loader')
    const miniCssExtractLoader = require('../loaders/mini-css-extract-loader')
    const sassLoader = require('../loaders/sass-loader')
    const styleLoader = require('../loaders/style-loader')
    const vueStyleLoader = require('../loaders/vue-style-loader')

    return {
      test: /\.s(a|c)ss$/,
      use: [
        miniCssExtractLoader(entry),
        extractCssChunksWebpackLoader(entry),
        cacheLoader(entry),
        styleLoader(entry),
        vueStyleLoader(entry),
        cssLoader(entry, 1),
        sassLoader(entry)
      ].filter((loader) => loader)
    }
  }
}
