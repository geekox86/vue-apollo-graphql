module.exports = (entry) => {
  if (entry.typescript) {
    const babelLoader = require('../loaders/babel-loader')
    const cacheLoader = require('../loaders/cache-loader')
    const emitFileLoader = require('../loaders/emit-file-loader')
    const tsLoader = require('../loaders/ts-loader')

    return {
      test: /\.ts$/,
      use: [
        emitFileLoader(entry),
        cacheLoader(entry),
        babelLoader(entry),
        tsLoader(entry)
      ].filter((loader) => loader),
      exclude: /node_modules/
    }
  }
}
