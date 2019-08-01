module.exports = (entry) => {
  if (entry.css) {
    const styleLoader = require('../loaders/style-loader')
    const vueStyleLoader = require('../loaders/vue-style-loader')
    const miniCssExtractLoader = require('../loaders/mini-css-extract-loader')
    const cssLoader = require('../loaders/css-loader')
    const postcssLoader = require('../loaders/postcss-loader')

    return {
      test: /\.css$/,
      use: [
        styleLoader(entry),
        vueStyleLoader(entry),
        miniCssExtractLoader(entry),
        cssLoader(entry, entry.postcss ? 1 : 0),
        postcssLoader(entry)
      ].filter((loader) => loader)
    }
  }
}
