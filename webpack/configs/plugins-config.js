module.exports = (entry) => {
  const caseSensitivePathsWebpackPlugin = require('../plugins/case-sensitive-paths-webpack-plugin')
  const eventHooksWebpackPlugin = require('../plugins/event-hooks-webpack-plugin')
  const extractCssChunksWebpackPlugin = require('../plugins/extract-css-chunks-webpack-plugin')
  const fontAwesomeMinifyPlugin = require('../plugins/font-awesome-minify-plugin')
  const forkTsCheckerWebpackPlugin = require('../plugins/fork-ts-checker-webpack-plugin')
  const friendlyErrorsWebpackPlugin = require('../plugins/friendly-errors-webpack-plugin')
  const htmlWebpackPlugin = require('../plugins/html-webpack-plugin')
  const miniCssExtractPlugin = require('../plugins/mini-css-extract-plugin')
  const postcssWebpackPlugin = require('../plugins/postcss-webpack-plugin')
  const vueLoaderPlugin = require('../plugins/vue-loader-plugin')
  const vuetifyLoaderPlugin = require('../plugins/vuetify-loader-plugin')
  const webpackBarPlugin = require('../plugins/webpack-bar-plugin')
  const webpackBundleAnalyzerPlugin = require('../plugins/webpack-bundle-analyzer-plugin')

  return [
    caseSensitivePathsWebpackPlugin(entry),
    friendlyErrorsWebpackPlugin(entry),
    webpackBarPlugin(entry),
    eventHooksWebpackPlugin(entry),
    webpackBundleAnalyzerPlugin(entry),
    htmlWebpackPlugin(entry),
    forkTsCheckerWebpackPlugin(entry),
    vueLoaderPlugin(entry),
    vuetifyLoaderPlugin(entry),
    miniCssExtractPlugin(entry),
    extractCssChunksWebpackPlugin(entry),
    fontAwesomeMinifyPlugin(entry),
    postcssWebpackPlugin(entry)
  ].filter((plugin) => plugin)
}
