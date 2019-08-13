module.exports = (entry) => {
  if (entry.mode == 'production') {
    const {BundleAnalyzerPlugin: WebpackBundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

    return new WebpackBundleAnalyzerPlugin({ openAnalyzer: false })
  }
}
