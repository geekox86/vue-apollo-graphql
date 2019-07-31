module.exports = (entry) => {
  const fileLoader = require('../loaders/file-loader')

  if (entry.assets) {
    return {
      test: entry.assets,
      use: fileLoader(entry)
    }
  }
}
