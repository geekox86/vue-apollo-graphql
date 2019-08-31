module.exports = (entry) => {
  if (entry.mode == 'production') {
    const StatsWebpackPlugin = require('stats-webpack-plugin')

    return new StatsWebpackPlugin('stats.json')
  }
}
