module.exports = (entry) => {
  const fileLoader = require('../loaders/file-loader')

  if (entry.assets) {
    return {
      test: (filename) => {
        for (const matcher of Object.values(entry.assets)) {
          if (matcher.test(filename)) {
            return true
          }
        }
      },
      use: fileLoader(entry)
    }
  }
}
