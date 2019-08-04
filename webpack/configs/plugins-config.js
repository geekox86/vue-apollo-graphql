module.exports = (entry) => {
  const caseSensitivePathsWebpackPlugin = require('../plugins/case-sensitive-paths-webpack-plugin')
  const eventHooksWebpackPlugin = require('../plugins/event-hooks-webpack-plugin')
  const extractCssChunksWebpackPlugin = require('../plugins/extract-css-chunks-webpack-plugin')
  const fontAwesomeMinifyPlugin = require('../plugins/font-awesome-minify-plugin')
  const friendlyErrorsWebpackPlugin = require('../plugins/friendly-errors-webpack-plugin')
  const htmlWebpackPlugin = require('../plugins/html-webpack-plugin')
  const miniCssExtractPlugin = require('../plugins/mini-css-extract-plugin')
  const vueLoaderPlugin = require('../plugins/vue-loader-plugin')
  const vuetifyLoaderPlugin = require('../plugins/vuetify-loader-plugin')
  const webpackBarPlugin = require('../plugins/webpack-bar-plugin')

  return [
    caseSensitivePathsWebpackPlugin(entry),
    friendlyErrorsWebpackPlugin(entry),
    webpackBarPlugin(entry),
    eventHooksWebpackPlugin(entry),
    htmlWebpackPlugin(entry),
    vueLoaderPlugin(entry),
    vuetifyLoaderPlugin(entry),
    miniCssExtractPlugin(entry),
    extractCssChunksWebpackPlugin(entry),
    fontAwesomeMinifyPlugin(entry)
  ].filter((plugin) => plugin)
}
