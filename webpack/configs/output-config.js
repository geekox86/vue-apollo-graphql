module.exports = (entry) => {
  const path = require('path')

  const hash = (entry.mode == 'production' && entry.hash) ? '.[contenthash:8]' : ''

  return {
    path: path.resolve(entry.root, entry.output),
    publicPath: './',
    filename: entry.filename.replace(/\.[^.]+$/, `${ hash }.js`),
    ...(entry.modules && { libraryTarget: 'commonjs2' })
  }
}
