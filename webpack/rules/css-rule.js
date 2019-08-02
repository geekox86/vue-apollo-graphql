module.exports = (entry) => {
  if (entry.css) {
    const cssLoader = require('../loaders/css-loader')
    const miniCssExtractLoader = require('../loaders/mini-css-extract-loader')
    const postcssLoader = require('../loaders/postcss-loader')
    const styleLoader = require('../loaders/style-loader')
    const vueStyleLoader = require('../loaders/vue-style-loader')

    return {
      test: /\.css$/,
      use: [
        styleLoader(entry),
        vueStyleLoader(entry),
        miniCssExtractLoader(entry),
        cssLoader(entry, entry.postcss ? 2 : 1),
        postcssLoader(entry)
      ].filter((loader) => loader)
    }
  }
}
