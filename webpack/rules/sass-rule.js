module.exports = (entry) => {
  if (entry.sass) {
    const cssLoader = require('../loaders/css-loader')
    const miniCssExtractLoader = require('../loaders/mini-css-extract-loader')
    const postcssLoader = require('../loaders/postcss-loader')
    const sassLoader = require('../loaders/sass-loader')
    const styleLoader = require('../loaders/style-loader')
    const vueStyleLoader = require('../loaders/vue-style-loader')

    return {
      test: /\.s(a|c)ss?$/,
      use: [
        styleLoader(entry),
        vueStyleLoader(entry),
        miniCssExtractLoader(entry),
        cssLoader(entry, entry.postcss ? 3 : 2),
        postcssLoader(entry),
        sassLoader(entry)
      ].filter((loader) => loader)
    }
  }
}
