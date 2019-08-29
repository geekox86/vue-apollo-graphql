module.exports = (entry) => {
  if (entry.sass) {
    const cacheLoader = require('../loaders/cache-loader')
    const cssLoader = require('../loaders/css-loader')
    const extractCssChunksWebpackLoader = require('../loaders/extract-css-chunks-webpack-loader')
    const miniCssExtractLoader = require('../loaders/mini-css-extract-loader')
    const postcssLoader = require('../loaders/postcss-loader')
    const resolveUrlLoader = require('../loaders/resolve-url-loader')
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
        cssLoader(entry, entry.postcss ? 3 : 2),
        resolveUrlLoader(entry),
        postcssLoader(entry),
        sassLoader(entry)
      ].filter((loader) => loader)
    }
  }
}
