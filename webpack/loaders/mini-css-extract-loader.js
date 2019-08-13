module.exports = (entry) => {
  if (entry.mode == 'production' && entry.extractCss == 'entry') {
    const { loader: MiniCssExtractLoader } = require('mini-css-extract-plugin')

    return MiniCssExtractLoader
  }
}
