module.exports = (entry) => {
  if (entry.mode == 'production' && entry.extractCss) {
    const MiniCssExtractPlugin = require('mini-css-extract-plugin')

    return MiniCssExtractPlugin.loader
  }
}
