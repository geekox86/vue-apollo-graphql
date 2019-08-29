module.exports = (entry) => {
  const { BundleAnalyzerPlugin: WebpackBundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

  return new WebpackBundleAnalyzerPlugin({
    openAnalyzer: false,
    generateStatsFile: true
  })
}
