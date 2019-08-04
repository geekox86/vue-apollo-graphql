module.exports = (entry) => {
  if (entry.mode == 'production' && entry.extractCss == 'entry') {
    const MiniCssExtractPlugin = require('mini-css-extract-plugin')

    return new MiniCssExtractPlugin({ filename: entry.filename.replace(/\.[^.]+$/, '.[contenthash:8].css') })
  }
}
