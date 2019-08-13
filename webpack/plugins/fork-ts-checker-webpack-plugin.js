module.exports = (entry) => {
  if (entry.typescript) {
    const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

    return new ForkTsCheckerWebpackPlugin({
      formatter: 'codeframe',
      ...(entry.vue && { vue: true })
    })
  }
}
