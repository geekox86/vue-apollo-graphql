module.exports = (entry) => {
  return {
    loader: 'file-loader',
    options: {
      outputPath: entry.outputAssets,
      name: '[name].[contenthash:8].[ext]'
    }
  }
}
