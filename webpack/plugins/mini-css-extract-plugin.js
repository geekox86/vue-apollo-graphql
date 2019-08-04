module.exports = (entry) => {
  if (entry.mode == 'production' && entry.extractCss == 'entry') {
    const MiniCssExtractPlugin = require('mini-css-extract-plugin')

    const hash = (entry.mode == 'production' && entry.hash) ? '.[contenthash:8]' : ''

    return new MiniCssExtractPlugin({ filename: entry.filename.replace(/\.[^.]+$/, `${ hash }.css`) })
  }
}
