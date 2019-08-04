module.exports = (entry) => {
  if (entry.mode == 'production' && entry.extractCss == 'chunk') {
    const ExtractCssChunksWebpackPlugin = require('extract-css-chunks-webpack-plugin')

    const hash = (entry.mode == 'production' && entry.hash) ? '.[contenthash:8]' : ''

    return new ExtractCssChunksWebpackPlugin({ filename: entry.filename.replace(/\.[^.]+$/, `${ hash }.css`) })
  }
}
