module.exports = (entry) => {
  const fileLoader = require('../loaders/file-loader')

  if (entry.assets) {
    return {
      test: (filename) => {
        for (const exts of Object.values(entry.assets)) {
          if (exts.test(filename)) {
            return true
          }
        }
      },
      use: fileLoader(entry)
    }
  }
}
