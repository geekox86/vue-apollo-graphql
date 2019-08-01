const contextConfig = require('./configs/context-config')
const devServerConfig = require('./configs/dev-server-config')
const devtoolConfig = require('./configs/devtool-config')
const entryConfig = require('./configs/entry-config')
const externalsConfig = require('./configs/externals-config')
const moduleConfig = require('./configs/module-config')
const outputConfig = require('./configs/output-config')
const pluginsConfig = require('./configs/plugins-config')
const resolveConfig = require('./configs/resolve-config')
const statsConfig = require('./configs/stats-config')
const targetConfig = require('./configs/target-config')
const watchConfig = require('./configs/watch-config')

module.exports = (entry) => {
  return {
    context: contextConfig(entry),
    entry: entryConfig(entry),
    target: targetConfig(entry),
    output: outputConfig(entry),
    externals: externalsConfig(entry),
    resolve: resolveConfig(entry),
    module: moduleConfig(entry),
    plugins: pluginsConfig(entry),
    devtool: devtoolConfig(entry),
    devServer: devServerConfig(entry),
    watch: watchConfig(entry),
    stats: statsConfig(entry)
  }
}
