module.exports = () => {
  const CaseSensitivePathsWebpackPlugin = require('case-sensitive-paths-webpack-plugin')

  return new CaseSensitivePathsWebpackPlugin()
}
