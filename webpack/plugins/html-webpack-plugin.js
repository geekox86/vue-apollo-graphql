module.exports = (entry) => {
  if (entry.html) {
    const HtmlWebpackPlugin = require('html-webpack-plugin')
    const path = require('path')

    return new HtmlWebpackPlugin({
      template: path.resolve(entry.root, entry.input, entry.html),
      filename: entry.filename.replace(/\.[^.]+$/, '.html')
    })
  }
}
