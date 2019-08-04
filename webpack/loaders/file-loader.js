module.exports = (entry) => {
  const hash = (entry.mode == 'production' && entry.hash) ? '.[contenthash:8]' : ''

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
      name: `[name]${ hash }.[ext]`
    }
  }
}
