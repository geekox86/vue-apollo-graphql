module.exports = (entry) => {
  if (entry.mode == 'production' && entry.extractCss == 'chunk') {
    const ExtractCssChunksWebpackPlugin = require('extract-css-chunks-webpack-plugin')

    return new ExtractCssChunksWebpackPlugin({ filename: entry.filename.replace(/\.[^.]+$/, '.[contenthash:8].css') })
  }
}
