module.exports = (entry) => {
  return {
    loader: 'file-loader',
    options: {
      outputPath: (filename) => {
        for (const [asset, exts] of Object.entries(entry.assets)) {
          if (exts.test(filename)) {
            return `${ asset }/${ filename }`
          }
        }
      },
      name: '[name].[contenthash:8].[ext]'
    }
  }
}
