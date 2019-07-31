module.exports = () => {
  const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

  return new FriendlyErrorsWebpackPlugin({ clearConsole: false })
}
