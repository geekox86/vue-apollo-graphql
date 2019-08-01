module.exports = (entry) => {
  if (entry.stylus) {
    const cssLoader = require('../loaders/css-loader')
    const miniCssExtractLoader = require('../loaders/mini-css-extract-loader')
    const postcssLoader = require('../loaders/postcss-loader')
    const resolveUrlLoader = require('../loaders/resolve-url-loader')
    const styleLoader = require('../loaders/style-loader')
    const stylusLoader = require('../loaders/stylus-loader')
    const vueStyleLoader = require('../loaders/vue-style-loader')

    return {
      test: /\.styl(us)?$/,
      use: [
        styleLoader(entry),
        vueStyleLoader(entry),
        miniCssExtractLoader(entry),
        cssLoader(entry, entry.postcss ? 3 : 2),
        resolveUrlLoader(entry),
        postcssLoader(entry),
        stylusLoader(entry)
      ].filter((loader) => loader)
    }
  }
}
