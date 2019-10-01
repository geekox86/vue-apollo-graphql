module.exports = (entry) => {
  const babelLoader = require('../loaders/babel-loader')
  const cacheLoader = require('../loaders/cache-loader')
  const emitFileLoader = require('../loaders/emit-file-loader')

  const loaders = [
    emitFileLoader(entry),
    cacheLoader(entry),
    babelLoader(entry)
  ].filter((loader) => loader)

  if (loaders.length) {
    return {
      test: /\.js$/,
      use: loaders,
      exclude: !entry.transpileExternals || !entry.transpileExternals.length ?
        /node_modules/ :
        new RegExp(`node_modules/(?!(${ entry.transpileExternals.join('|') })/).*`)
    }
  }
}
