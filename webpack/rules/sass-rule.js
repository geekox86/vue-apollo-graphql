module.exports = (entry) => {
  if (entry.sass) {
    const styleLoader = require('../loaders/style-loader')
    const vueStyleLoader = require('../loaders/vue-style-loader')
    const miniCssExtractLoader = require('../loaders/mini-css-extract-loader')
    const cssLoader = require('../loaders/css-loader')
    const postcssLoader = require('../loaders/postcss-loader')
    const sassLoader = require('../loaders/sass-loader')

    return {
      test: /\.s(a|c)ss?$/,
      use: [
        styleLoader(entry),
        vueStyleLoader(entry),
        miniCssExtractLoader(entry),
        cssLoader(entry, entry.postcss ? 2 : 1),
        postcssLoader(entry),
        sassLoader(entry)
      ].filter((loader) => loader)
    }
  }
}
