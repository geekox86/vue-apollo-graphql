module.exports = (entry) => {
  if (entry.mode == 'development' && entry.dev == 'server') {
    const path = require('path')

    return {
      port: 8080,
      contentBase: path.resolve(entry.root, entry.output),
      index: entry.filename.replace(/\.[^.]+$/, '.html'),
      historyApiFallback: true,
      compress: true,
      hot: true
    }
  }
}
