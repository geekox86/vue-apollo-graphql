module.exports = (entry) => {
  if (entry.html) {
    const HtmlWebpackPlugin = require('html-webpack-plugin')
    const path = require('path')

    const hash = (entry.mode == 'production' && entry.hash) ? '.[contenthash:8]' : ''

    return new HtmlWebpackPlugin({
      template: path.resolve(entry.root, entry.input, entry.html),
      filename: entry.filename.replace(/\.[^.]+$/, `${ hash }.html`)
    })
  }
}
