module.exports = (entry) => {
  if (entry.css) {
    const cacheLoader = require('../loaders/cache-loader')
    const cssLoader = require('../loaders/css-loader')
    const extractCssChunksWebpackLoader = require('../loaders/extract-css-chunks-webpack-loader')
    const miniCssExtractLoader = require('../loaders/mini-css-extract-loader')
    const postcssLoader = require('../loaders/postcss-loader')
    const resolveUrlLoader = require('../loaders/resolve-url-loader')
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
        cssLoader(entry, entry.postcss ? 2 : 1),
        resolveUrlLoader(entry),
        postcssLoader(entry)
      ].filter((loader) => loader)
    }
  }
}
