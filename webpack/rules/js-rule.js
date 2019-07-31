module.exports = (entry) => {
  const emitFileLoader = require('../loaders/emit-file-loader')
  const babelLoader = require('../loaders/babel-loader')

  const loaders = [
    emitFileLoader(entry),
    babelLoader(entry)
  ].filter((loader) => loader)

  if (loaders.length) {
    return {
      test: /\.js$/,
      use: loaders,
      ...(entry.modules && { exclude: /node_modules/ })
    }
  }
}
