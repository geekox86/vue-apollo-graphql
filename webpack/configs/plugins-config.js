module.exports = (entry) => {
  const caseSensitivePathsWebpackPlugin = require('../plugins/case-sensitive-paths-webpack-plugin')
  const friendlyErrorsWebpackPlugin = require('../plugins/friendly-errors-webpack-plugin')
  const webpackBarPlugin = require('../plugins/webpack-bar-plugin')
  const eventHooksWebpackPlugin = require('../plugins/event-hooks-webpack-plugin')
  const htmlWebpackPlugin = require('../plugins/html-webpack-plugin')
  const vueLoaderPlugin = require('../plugins/vue-loader-plugin')
  const vuetifyLoaderPlugin = require('../plugins/vuetify-loader-plugin')
  const miniCssExtractPlugin = require('../plugins/mini-css-extract-plugin')

  return [
    caseSensitivePathsWebpackPlugin(entry),
    friendlyErrorsWebpackPlugin(entry),
    webpackBarPlugin(entry),
    eventHooksWebpackPlugin(entry),
    htmlWebpackPlugin(entry),
    vueLoaderPlugin(entry),
    vuetifyLoaderPlugin(entry),
    miniCssExtractPlugin(entry)
  ].filter((plugin) => plugin)
}
