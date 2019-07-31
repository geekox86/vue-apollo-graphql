module.exports = (entry) => {
  if (entry.externals) {
    const webpackNodeExternals = require('webpack-node-externals')

    return [webpackNodeExternals()]
  }
}
