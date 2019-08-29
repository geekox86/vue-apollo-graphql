module.exports = (entry) => {
  if (entry.less) {
    const cacheLoader = require('../loaders/cache-loader')
    const cssLoader = require('../loaders/css-loader')
    const extractCssChunksWebpackLoader = require('../loaders/extract-css-chunks-webpack-loader')
    const lessLoader = require('../loaders/less-loader')
    const miniCssExtractLoader = require('../loaders/mini-css-extract-loader')
    const postcssLoader = require('../loaders/postcss-loader')
    const resolveUrlLoader = require('../loaders/resolve-url-loader')
    const styleLoader = require('../loaders/style-loader')
    const vueStyleLoader = require('../loaders/vue-style-loader')

    return {
      test: /\.less$/,
      use: [
        miniCssExtractLoader(entry),
        extractCssChunksWebpackLoader(entry),
        cacheLoader(entry),
        styleLoader(entry),
        vueStyleLoader(entry),
        cssLoader(entry, entry.postcss ? 3 : 2),
        resolveUrlLoader(entry),
        postcssLoader(entry),
        lessLoader(entry)
      ].filter((loader) => loader)
    }
  }
}
