module.exports = (entry) => {
  const path = require('path')

  return {
    path: path.resolve(entry.root, entry.output),
    publicPath: '.',
    filename: entry.filename.replace(/\.[^.]+$/, '.js'),
    ...(entry.modules && { libraryTarget: 'commonjs2' })
  }
}
