module.exports = (entry) => {
  return {
    loader: 'file-loader',
    options: {
      outputPath: (filename, path) => {
        for (const [asset, matcher] of Object.entries(entry.assets)) {
          if (matcher.test(path)) {
            return `${ asset }/${ filename }`
          }
        }
      },
      name: '[name].[contenthash:8].[ext]'
    }
  }
}
