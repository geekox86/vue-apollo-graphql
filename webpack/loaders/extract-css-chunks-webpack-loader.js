module.exports = (entry) => {
  if (entry.mode == 'production' && entry.extractCss == 'chunk') {
    const ExtractCssChunksWebpackPlugin = require('extract-css-chunks-webpack-plugin')

    return {
      loader: ExtractCssChunksWebpackPlugin.loader,
      options: {
        hot: true,
        reloadAll: true
      }
    }
  }
}
