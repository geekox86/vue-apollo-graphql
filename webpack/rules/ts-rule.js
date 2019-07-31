module.exports = (entry) => {
  if (entry.typescript) {
    const emitFileLoader = require('../loaders/emit-file-loader')
    const babelLoader = require('../loaders/babel-loader')
    const tsLoader = require('../loaders/ts-loader')

    return {
      test: /\.ts$/,
      use: [
        emitFileLoader(entry),
        babelLoader(entry),
        tsLoader(entry)
      ].filter((loader) => loader),
      ...(entry.modules && { exclude: /node_modules/ })
    }
  }
}
