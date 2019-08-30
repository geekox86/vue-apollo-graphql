module.exports = () => {
  const CpuProfileWebpackPlugin = require('cpuprofile-webpack-plugin')

  return new CpuProfileWebpackPlugin()
}
