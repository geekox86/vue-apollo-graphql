module.exports = (entry) => {
  if (entry.mode == 'production' && entry.extractCss == 'chunk') {
    const { loader: ExtractCssChunksWebpackLoader } = require('extract-css-chunks-webpack-plugin')

    return {
      loader: ExtractCssChunksWebpackLoader,
      options: {
        hot: true,
        reloadAll: true
      }
    }
  }
}
