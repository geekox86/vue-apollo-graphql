module.exports = (entry) => {
  if (entry.mode == 'development' && entry.dev == 'server') {
    const path = require('path')

    return {
      port: 8080,
      contentBase: path.resolve(entry.root, 'builds'),
      watchContentBase: true,
      historyApiFallback: true,
      compress: true,
      hot: true
    }
  }
}
