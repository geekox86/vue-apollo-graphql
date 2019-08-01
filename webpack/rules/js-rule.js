module.exports = (entry) => {
  const babelLoader = require('../loaders/babel-loader')
  const emitFileLoader = require('../loaders/emit-file-loader')

  const loaders = [
    emitFileLoader(entry),
    babelLoader(entry)
  ].filter((loader) => loader)

  if (loaders.length) {
    return {
      test: /\.js$/,
      use: loaders,
      exclude: /node_modules/
    }
  }
}
